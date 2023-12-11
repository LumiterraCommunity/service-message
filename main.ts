import { resolve } from "path";
import { readdirSync, writeFileSync, openSync } from 'fs';
import * as TJS from "typescript-json-schema";

// optionally pass argument to schema generator
const settings: TJS.PartialArgs = {
    required: true,
};

// optionally pass ts compiler options
const compilerOptions: TJS.CompilerOptions = {
    strictNullChecks: true,
};

const dir = resolve("messages");
const output = resolve("schema.json");

const files = readdirSync(dir);

const program = TJS.getProgramFromFiles(
    files.map(m => resolve(`./messages/${m}`)),
    compilerOptions,
);

const schema = TJS.generateSchema(program, "*", settings);

const fh = openSync(output, "w+");
writeFileSync(fh, JSON.stringify(schema));

type B = {
    a: string
}

const c: B = {
    a: "1"
} 

type E <T> = {
    a: T
}

function s<T extends Object>(a: T, ...p: E<typeof c>[] ) {

}









s(1,)