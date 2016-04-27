var hint = require( '../../../widget/hint/hint' ).hint;

var title = $( '#title' ),
	editor = $( '#editor' ),
	type = $( '#type' ),
	editorBtn = $( '#editorBtn' ),
	_id = '';

$( '#editorForm' ).on( 'submit', function(){
	var data = {
			title: title.val(),
			content: editor.val(),
			kind: type.val(),
			tags: type.val()
		}
		url = '/blog/create';
	if( _id = location.search.slice(1).split('=')[1] ){
		data.id = _id;
		url = '/blog/update'
	}
	editorBtn.attr( 'disabled', true );
	$.ajax({
		url: url,
		type: 'post',
		dataType: 'json',
		data: data,
		success: function( ret ){
			if( ret.code == 0 ){
				editorBtn.attr( 'disabled', false );
				hint.show( '保存成功' );
				setTimeout( function(){
					window.location.href = '/blog/mis';
				}, 1000 )
			}
		}
	});
	return false;
});

function fetchBlog( id ){
	$.ajax({
		url: '/blog/fetchEdit',
		type: 'get',
		dataType: 'json',
		data: { id: id },
		success: function( ret ){
			if( ret.code == 0 ){
				title.val( ret.data[0].title );
				_id = ret.data[0].id;
				editor.val( ret.data[0].content );
			}
			console.log( ret );
		}
	});
}

!function(){
	if( location.search ){
		_id = location.search.slice(1).split('=')[1];
		fetchBlog( _id );
	}
}();