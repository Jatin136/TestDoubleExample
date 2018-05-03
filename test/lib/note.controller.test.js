global.td = require('testdouble');
var assert = require('assert');

describe('NoteController', () => {
    var noteControllerTest;
    beforeEach(() => {
        noteControllerTest = td.replace('../../app/controllers/note.controller');
    });
    it('findAll executed successfully', () => {

        // this is called stubing
        td.when(noteControllerTest.findAll()).thenReturn({
            'title': 'this title',
            'content': 'this content'
        });

        var result = noteControllerTest.findAll();

        //console.log(td.explain(noteControllerTest.findAll));

        assert.equal(result.title, 'this title');
        td.reset();
    });

    it('findOne executed successfully', () => {

        td.when(noteControllerTest.findOne(), {
            ignoreExtraArgs: true
        }).thenReturn('success');
        var success = noteControllerTest.findOne();

        // console.log(td.explain(noteControllerTest.findOne));

        assert.equal(success, 'success');
        td.reset();
    });

    it('create executed successfully', function () {

        td.when(noteControllerTest.create(), {
            ignoreExtraArgs: true
        }).thenReturn('note created successfully');

        var note = noteControllerTest.create();

        assert.equal(note, 'note created successfully');

        td.reset();

    })

    it('update executed successfully', function () {

        var note = {
            id: '1234',
            title: 'title',
            content: 'content'
        }

        td.when(noteControllerTest.update(td.matchers.isA(Number))).thenReturn(note);

        var noteResult = noteControllerTest.update(1234);

        // console.log(td.explain(noteControllerTest.update));

        assert.deepEqual(noteResult, note);

        td.reset();
    })

    it('delete executed successfully', function () {

        td.when(noteControllerTest.delete(td.matchers.isA(Number))).thenReturn('Note deleted successfully');

        var result = noteControllerTest.delete(1234);

        assert.equal(result, 'Note deleted successfully');

        td.reset();
    })

});