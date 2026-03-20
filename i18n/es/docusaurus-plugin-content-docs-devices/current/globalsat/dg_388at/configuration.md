---
slug: /globalsat/dg_388at/configuration
id: dg_388at-configuration
sidebar_label: Configuration
title: GlobalSat - DG-388AT Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat DG-388AT con Plaspy, ajustes de servidor y comandos de ejemplo
keywords:
  - configuración GlobalSat DG-388AT
  - configuración DG-388AT
  - exportar GPX DG-388AT
  - configuración rastreador GlobalSat
  - emparejamiento BLE DG-388AT
  - configuración de dispositivo Plaspy
  - importación GPS Plaspy
  - configuración software seguimiento DG-388AT
  - configuración servidor GlobalSat DG-388AT
  - integración registrador GPS Plaspy
---

# GlobalSat - DG-388AT Configuración

Esta página ofrece contexto público sobre cómo usar el GlobalSat DG-388AT con Plaspy. Explica cómo se integra el DG-388AT en los flujos de trabajo de Plaspy, destaca los ajustes de servidor compartidos que se aplican cuando un dispositivo admite configuración directa de servidor y documenta comandos de ejemplo publicados cuando están disponibles. El DG-388AT se describe principalmente como un registrador GPS independiente con Bluetooth Low Energy para exportar rutas y permitir la importación de GPX en Plaspy; ese caso de uso es el eje de la orientación que encontrará a continuación.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos envían datos a la plataforma. Los pasos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Parte del contenido público para este modelo incluye comandos de configuración por SMS; si su unidad DG-388AT o variante regional admite SMS o configuración de servidor remota, esos comandos se incluyen en la sección Ejemplos de comandos de configuración como referencia.

## Resumen de configuración

Este proceso prepara un DG-388AT para su uso con Plaspy ya sea exportando las rutas registradas (GPX) vía BLE e importándolas en Plaspy, o apuntando un dispositivo que admite configuración remota de servidor al endpoint compartido de Plaspy. El objetivo es asegurar que sus rutas y la telemetría registrada sean visibles en Plaspy para mapas, informes y análisis históricos.

- Prepare el DG-388AT para comunicarse con Plaspy asegurándose de poder exportar datos o configurar un endpoint de servidor.
- Valide la conectividad del dispositivo y la exportación de datos mediante la app ez-Connect o la utilidad de PC suministrada antes de importar a Plaspy.
- Configure el endpoint del servidor y el transporte si su variante de dispositivo admite apuntar directamente a Plaspy.
- Confirme que los archivos GPX exportados contienen los waypoints y marcas de tiempo esperados para una importación precisa en Plaspy.
- Reinicie o apague y encienda el dispositivo después de aplicar ajustes de servidor cuando sea necesario para que los cambios surtan efecto.

## Ajustes del servidor Plaspy

- Dominio del servidor Plaspy d.plaspy.com
- IP del servidor Plaspy 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos del dispositivo

Tenga en cuenta que Plaspy usa el mismo puerto (8888) para todos los dispositivos compatibles y puede detectar automáticamente el protocolo entrante.

## Requisitos previos

- Un DG-388AT cargado y operativo con emparejamiento BLE accesible y herramientas para exportar GPX.
- Un smartphone, tablet o PC con la app ez-Connect o la utilidad de PC del dispositivo instaladas para emparejar y exportar archivos GPX.
- Acceso a una cuenta de Plaspy y la posibilidad de subir archivos GPX o confirmar la visibilidad de datos del dispositivo en la plataforma Plaspy.
- Conocimiento del IMEI del dispositivo si el fabricante o el flujo público de configuración lo solicita para comandos remotos.
- Si su unidad o región incluye una variante celular o con capacidad SMS, tenga a la mano los valores APN requeridos y acceso a SMS para enviar comandos de configuración.
- Documentación del fabricante o canales de soporte disponibles para instrucciones y solución de problemas específicas del firmware.

## Cómo se conecta este rastreador a Plaspy

El DG-388AT se integra principalmente con Plaspy mediante archivos de ruta exportados y flujos de trabajo dirigidos por apps, pero el contenido público también muestra una vía para dispositivos que admiten configuración remota de servidor.

- Para el flujo estándar, empareje el DG-388AT por BLE y use ez-Connect para exportar archivos GPX; luego cargue esos archivos en Plaspy para mapeo y análisis.
- Si un dispositivo o variante regional admite configuración remota de servidor, puede apuntarse a Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 y el puerto 8888 con UDP o TCP como transporte.
- Una vez que los datos llegan a Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y hace visible la telemetría histórica en paneles e informes.
- La importación de GPX conserva las marcas de tiempo y las posiciones de los waypoints para que Plaspy pueda reconstruir rutas y ofrecer análisis y visualización.
- Valide las cargas o las conexiones en vivo al servidor dentro de Plaspy para confirmar que los registros aparecen según lo esperado.

## Flujo común de configuración

1. Acceda al método de configuración oficial de GlobalSat para su unidad DG-388AT (app ez-Connect, utilidad de PC u otra herramienta suministrada por el fabricante).
2. Si su unidad admite configuración directa del servidor, introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor/host.
3. Configure el puerto del servidor a 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP si el dispositivo requiere selección de transporte para la comunicación con el servidor.
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíe los comandos de configuración según las instrucciones del fabricante.
6. Reinicie o vuelva a arrancar el dispositivo si el fabricante lo requiere para aplicar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy o que los archivos GPX exportados se suban correctamente y muestren los waypoints y marcas de tiempo esperados en Plaspy.

Si su despliegue de DG-388AT usa el flujo estándar BLE + GPX, empareje con ez-Connect, exporte el archivo GPX e importe ese archivo en Plaspy en lugar de configurar un endpoint de servidor en vivo.

## Ejemplos de comandos de configuración

Los siguientes comandos de ejemplo se extraen de contenido de configuración publicado por el fabricante. Usan marcadores de posición que debe reemplazar por valores específicos del dispositivo antes de enviarlos. Preserve los marcadores de posición al preparar los comandos:

- {{imei}} — reemplace con el IMEI del dispositivo cuando el formato del comando lo requiera.
- [apn], [apnu], [apnp] — marcadores para valores APN en variantes celulares; solo relevantes si su unidad admite configuración celular o por SMS.
- {{checksum}} y {{checksumreeboot}} — valores de suma de comprobación hexadecimal calculados sobre el texto del comando antes del carácter '*'.

Comando principal de configuración (reemplazar marcadores y calcular checksum como se describe abajo):

```
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Comando opcional de reinicio (etiquételo como reinicio o paso de aplicación si es necesario):

```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Cálculo de checksum (referencia pública): calcule una suma de comprobación de un solo byte mediante XOR sobre todo el texto del comando hasta, pero sin incluir, el carácter '*', luego convierta ese byte a una cadena hexadecimal en mayúsculas de dos dígitos. Coloque el valor hexadecimal resultante de dos caracteres en el marcador {{checksum}}. El ejemplo en JavaScript utilizado en el contenido público calcula el checksum por XOR de los códigos de carácter y lo convierte a hex en mayúsculas con dos caracteres.

Importante: esos comandos estilo SMS aparecen en la documentación pública pero pueden aplicar solo a variantes o configuraciones que admitan SMS o comandos remotos. El flujo principal del DG-388AT sigue siendo la exportación por BLE a GPX y la importación en Plaspy, salvo que la documentación de su hardware o firmware confirme la configuración de servidor.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los métodos de configuración disponibles; verifique siempre qué opciones soporta su unidad DG-388AT antes de continuar.
- Para comandos por SMS o remotos, el paso del checksum es obligatorio y debe calcularse exactamente como lo especifica el fabricante para evitar que los comandos sean rechazados.
- Elija UDP o TCP según las opciones de configuración del dispositivo; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- El DG-388AT es principalmente un registrador GPS BLE que exporta GPX para importación en Plaspy; la configuración directa de servidor solo aplica a unidades o variantes que ofrezcan esa capacidad.
- Guarde una copia de cualquier archivo GPX exportado como registro antes de importarlo a Plaspy para auditoría y resolución de problemas.

## Por qué usar Plaspy con esta configuración

Usar el DG-388AT con Plaspy brinda a los equipos una forma práctica de centralizar datos detallados e históricos de rutas en una plataforma de análisis y mapeo. Para organizaciones que valoran la reconstrucción de rutas, la revisión posterior a la actividad o las importaciones por lotes desde registradores independientes, el flujo BLE + exportación GPX ofrece una solución de bajo costo y confiable para conservar y analizar el historial de movimientos dentro de Plaspy.

Learn more about Plaspy and how it can process and visualize imported telemetry at https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup steps and technical documentation for the DG-388AT at the official GlobalSat website https://www.globalsat.com.tw/.
