using NJsonSchema;
using NJsonSchema.CodeGeneration.CSharp;

var jsonschema = await JsonSchema.FromFileAsync(args[0]);
var settings = new CSharpGeneratorSettings();

settings.Namespace = "Dapr.Messages";
settings.GenerateDataAnnotations = false;

var generator = new CSharpGenerator(jsonschema, settings);
var code = generator.GenerateFile();

Console.Write(code);