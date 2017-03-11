type pos = {
  x : float;
  y : float;
}

type person = {
  name : string;
  pos : pos;
}

type transport_route = {
  person : person;
  pos1 : pos;
  pos2 : pos;
}

type animal_species = 
  | Dog
  | Horse
  | Cow
  | Pig

type animal = {
  species : animal_species;
  pos : pos;
}

type tool_kind =
  | Hammer

type tool = {
  kind : tool_kind;
}

type plant_kind =
  | Tree
  | Flower

type plant = {
  kind : plant_kind
}

type material_kind =
  | Stone
  | Wood

type material = {
  kind : material_kind
}

(**
 * Move person from pos1 to pos2
 * Examine pos -> list everything on pos
 * Setup route/transport route/carry x/y/z from pos1 to pos2
 *)

 let move_person person dest =
  let {x; y} = person.pos in
  let distance = sqrt (((dest.pos.x -. person.pos.x) ** 2.) + ((dest.pos.y -. person.pos.y) ** 2.))  in
  let new_pos = {
    x = x;
    y = y;
  } in
  {person with pos = new_pos}
