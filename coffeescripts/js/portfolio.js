// Generated by CoffeeScript 1.12.6
(function() {
  var data, source, template;

  source = document.querySelector("#some-template").innerHTML;

  template = Handlebars.compile(source);

  data = {
    users: {
      firstName: "Phillip",
      lastName: "Rognerud",
      email: "philliprognerud@gmail.com"
    }
  };

  document.querySelector(".container").innerHTML = template(data);

}).call(this);
