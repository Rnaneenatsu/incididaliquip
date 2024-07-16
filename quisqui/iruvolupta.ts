import { Project, SourceFile } from "ts-morph";

function getExportDefinitions(filePath: string): any[] {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);
  const defs: any[] = [];

  sourceFile.getExportDeclarations().forEach((exportDecl) => {
    const namedExports = exportDecl.getNamedExports();
    namedExports.forEach((namedExport) => {
      const name = namedExport.getName();
      const alias = namedExport.getAliasNode()?.getText() || name;
      defs.push({ name, alias });
    });
  });

  return defs;
}

// Usage example
const exportDefs = getExportDefinitions("path/to/your/file.ts");
console.log(exportDefs);
