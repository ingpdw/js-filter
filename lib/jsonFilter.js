
/*
 * jsonFilter - lib/arrayFilter.js
 * Copyright(c) 2015 ingpdw <ingpdw@gmail.com>
 */
var arrayFilter = {};
exports = module.exports = arrayFilter = {
	getKey: function( _where ) {
		var arr = [];
		for( var key in _where ){
			arr.push( key );
		}

		return arr;
	},

	_run: function( _data, _where, isFirst ) {

		var i = 0, j = 0,
				len = _data.length,
				key = arrayFilter.getKey( _where ),
				keyLen = key.length, arr = [];

		for( ; len > i; i++ ){
			var item = _data[ i ], isCorrect = true;

			j = 0;
			for( ; keyLen > j; j++ ){
				var itemKey = key[ j ];

				if( item[ itemKey ] != _where[ itemKey ] ){
					isCorrect = false;
					break;
				}
			}

			if( isCorrect ){
				 arr.push( item );
				 if( isFirst ) break;
			}
		}

		return arr;
	},

	isArray: function( _data ){
		if( arrayFilter.type( _data ) !== 'array' ){
			return false;
		}
		return true;
	},

	first: function( _data, _where ) {
		if( !arrayFilter.isArray( _data ) )
			throw 'type error';

		return arrayFilter._run( _data, _where, true );
	},

	last: function( _data, _where ) {
		if( !arrayFilter.isArray( _data ) )
			throw 'type error';

		_data = _data.reverse();

		return arrayFilter._run( _data, _where, true );
	},

	filter: function( _data, _where ) {
		if( !arrayFilter.isArray( _data ) )
			throw 'type error';

		return arrayFilter._run( _data, _where );
	},

	type: function( val ) {
		var _val = Object.prototype.toString.call( val );
		var _type = 'object';

		switch( _val ){
			case '[object Object]':
				break;
			case '[object Array]':
				_type = 'array';
				break;
			case '[object Number]':
				_type = 'number';
				break;
			case '[object String]':
				_type = 'string';
				break;
			case '[object Boolean]':
				_type = 'boolean';
				break;
			case '[object Undefined]':
				_type = 'undefined';
				break;
			default:
				_type = 'unknown';
				break;
		}

		return _type;
	}
}
