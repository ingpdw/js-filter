# js-filter
* filter JSON data in javascript


## Install

```
$npm install js-filter
```

## Usage
```
import filter from 'js-filter';

var data = [
	{'id': 1, 'categoryName': 'free', 'width': 100, 'heigth': 100 },
	{'id': 2, 'categoryName': 'notice', 'width': 200, 'heigth': 300 },
	{'id': 3, 'categoryName': 'free', 'width': 200, 'heigth': 100 },
	{'id': 4, 'categoryName': 'notice', 'width': 100, 'heigth': 100 },
];

arrayFilter.filter( data, {'categoryName': 'free', 'heigth': 100 } );
//result
//{'id': 1, 'categoryName': 'free', 'width': 100, 'heigth': 100 }
//{'id': 4, 'categoryName': 'notice', 'width': 100, 'heigth': 100 }


arrayFilter.first( data, {'categoryName': 'free', 'heigth': 100 } );
//result
//{'id': 1, 'categoryName': 'free', 'width': 100, 'heigth': 100 }


arrayFilter.last( data, {'categoryName': 'free', 'heigth': 100 } );
//result
//{'id': 3, 'categoryName': 'free', 'width': 200, 'heigth': 100 }
```

## License
© 2015 ingpdw. MIT License
