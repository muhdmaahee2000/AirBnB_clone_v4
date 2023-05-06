echo "<command>" | ./console.py`

## File Description
[console.py](console.py) - the console contains the entry point of the command interpreter.
List of commands this console current supports:
* `EOF` - exits console
* `quit` - exits consol
* `<emptyline>` - overwrites default emptyline method and does nothing
* `create` - Creates a new instance of`BaseModel`, saves it (to the JSON file) and prints the id
* `destroy` - Deletes an instance based on the class name and id (save the change into the JSON file).
* `show` - Prints the string representation of an instance based on the class name
* `all` - Prints all string representation of all instances based or not on the class name.
* `update` - Updates an instance based on the class name and id by adding or updating attribute (save the change into the JSON file).
#### `models/` directory contains classes used for this project:
[base_model.py](/mdels/base_model.py) - The BaseModel class from which future classes will be derived
* `def __init__(self, *args, **kwargs)` - Initialization of the base model
* `def __str__(self)` - String representation of the BaseModel class
* `def save(self)` - Updates the attribute `updated_at` with the current datetime
* `def to_dict(self)` - returns a dictionary containing all keys/values of the instance

Classes inherited fom Base Model:
* [amenity.py](/models/amenity.py)
* [city.py](/models/

