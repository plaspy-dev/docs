---
slug: /globalsat/tr_616c1/configuration
id: tr_616c1-configuration
sidebar_label: Configuration
title: GlobalSat - TR-616C1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat TR-616C1 y conectarlo a Plaspy con ajustes de servidor compartido
keywords:
  - Configuración GlobalSat TR 616C1
  - Configuración TR 616C1 Plaspy
  - Configuración rastreador GlobalSat
  - Configuración servidor TR 616C1
  - Comandos SMS rastreador GPS
  - Integración rastreador Plaspy
  - Configuración rastreador GPS vehicular
  - Configuración seguimiento de flotas
  - Integración telemetría Plaspy
  - Configuración SMS TR 616C1
---

# GlobalSat - Configuración TR-616C1

Esta página documenta el contexto público de configuración para usar el rastreador GlobalSat TR-616C1 con Plaspy. Se concentra en los ajustes prácticos y los comandos que puede utilizar para apuntar un TR-616C1 al servidor de Plaspy, de modo que el dispositivo reporte posiciones y eventos a su cuenta de Plaspy. El contenido aquí se deriva de ejemplos de configuración públicos y del fragmento de configuración modelo provisto para este equipo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TR-616C1 admite informes por TCP, UDP y SMS y ofrece opciones de configuración remota comúnmente usadas para registrar el dispositivo en Plaspy.

## Resumen de la configuración

Este proceso prepara el TR-616C1 para comunicarse de forma confiable con la plataforma Plaspy, de modo que pueda monitorear vehículos y activos en tiempo real. El objetivo principal es establecer los parámetros de red del dispositivo y el punto de envío para que los datos de posición y eventos lleguen a Plaspy en el puerto estándar.

- Configurar el APN y el acceso de red para que el rastreador se conecte por datos celulares
- Establecer el endpoint y el puerto del servidor Plaspy para que el dispositivo envíe telemetría a Plaspy
- Seleccionar UDP o TCP según lo requiera el firmware del rastreador
- Validar la conectividad del dispositivo y confirmar que aparece en línea en Plaspy
- Opcionalmente, usar comandos SMS para la configuración remota cuando no exista acceso IP

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor al configurar el TR-616C1 para la integración con Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta distintos formatos de reporte

## Requisitos previos habituales

- Un TR-616C1 alimentado y accesible, instalado en el vehículo o en banco de pruebas para configuración
- SIM celular activa con datos habilitados y los ajustes APN correctos para la red móvil
- IMEI del dispositivo disponible para usar en SMS o herramientas del fabricante al dirigirse a una unidad específica
- Acceso al método oficial de configuración de GlobalSat, ya sea por comandos SMS o software del proveedor
- Conocimientos básicos sobre si utilizará transporte UDP o TCP para los reportes
- Cobertura de red en la ubicación del dispositivo para permitir la validación inmediata de la conexión

## Cómo se conecta este rastreador a Plaspy

El TR-616C1 envía posiciones GPS, eventos y telemetría al endpoint de Plaspy usando el transporte y el puerto configurados. Plaspy recibe los mensajes entrantes, identifica automáticamente el protocolo del rastreador y mapea los datos al sistema para visibilidad y alertas.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy
- Los mensajes se envían por TCP o UDP al puerto 8888 según la configuración de transporte del equipo
- Plaspy almacena posiciones en tiempo real y también procesa cargas en búfer cuando se reanuda la conectividad
- Eventos como estado de ignición, disparadores de movimiento y pérdida de alimentación se reportan a Plaspy para generar alertas
- Tras la configuración, el dispositivo debería volverse visible en Plaspy y comenzar a reportar regularmente

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de GlobalSat o al software del proveedor, o prepárese para enviar comandos SMS según la guía del fabricante
2. Ingrese el nombre de host o la IP del servidor Plaspy usando d.plaspy.com o 54.85.159.138 como endpoint
3. Configure el puerto del servidor a 8888, que es el puerto estándar de Plaspy usado por todos los dispositivos
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte
5. Configure el APN, usuario APN y contraseña APN si el dispositivo usa datos celulares
6. Aplique o guarde la configuración en el dispositivo y ejecute cualquier comando de confirmación necesario
7. Reinicie o haga reboot del dispositivo si es necesario para activar los ajustes
8. Verifique que el dispositivo reporte a Plaspy y que aparezca en línea en la plataforma

## Ejemplos de comandos de configuración

El TR-616C1 puede configurarse vía comandos SMS. El ejemplo de configuración del modelo utiliza comandos SMS con marcadores. Conserve los marcadores al construir sus mensajes SMS.

Nota sobre el formato usado por Plaspy
- El ejemplo de configuración hace referencia a un formato de mensaje Plaspy TSPRXAB27GHKLMnaicz*U!

Comando de configuración
- Reemplace los marcadores antes de enviar
- {{imei}} es el IMEI del dispositivo
- {{apn}} es el APN de su proveedor celular
- {{apnu}} es el usuario APN si se requiere
- {{apnp}} es la contraseña APN si se requiere
- {{checksum}} debe calcularse como el checksum XOR de la cadena del comando antes del asterisco en formato hexadecimal en mayúsculas de dos dígitos

Example SMS setup command
```text
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Comando de reinicio
- Reinicio opcional para aplicar los ajustes inmediatamente
- {{checksumreeboot}} es el checksum para la cadena del comando de reinicio

Example SMS reboot command
```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Explicación del checksum
- El checksum en estos comandos se calcula habitualmente aplicando XOR a cada código de carácter de la subcadena del comando que aparece antes del asterisco, y luego convirtiendo el resultado a una cadena hexadecimal de dos dígitos en mayúsculas. El fragmento de ejemplo proporcionado en la documentación original utiliza este método XOR.

## Notas de configuración

- El TR-616C1 admite configuración vía SMS como se muestra arriba y también permite configuración remota por datos si está disponible el software del proveedor
- La elección de transporte TCP frente a UDP depende de sus preferencias de instalación y de las opciones de firmware; Plaspy acepta ambos en el puerto 8888
- Verifique siempre los ajustes APN con el operador móvil y utilice las credenciales correctas en los marcadores D1, D2, D3
- Las revisiones de firmware y las herramientas del proveedor pueden cambiar la sintaxis exacta de los comandos o los campos disponibles, por lo que confirme con la documentación más reciente de GlobalSat cuando sea necesario
- Si utiliza la IP 54.85.159.138 o el dominio d.plaspy.com, ambos apuntan al endpoint de Plaspy y son aceptables en la configuración del equipo

## Por qué usar Plaspy con esta configuración

Usar el GlobalSat TR-616C1 con Plaspy ofrece a gestores de flotas y activos una vía sencilla para el seguimiento en tiempo real, alertas por eventos y reproducción histórica. El soporte multibanda celular y el registro en búfer del TR-616C1 ayudan a mantener la continuidad del rastreo, mientras que Plaspy gestiona los mensajes entrantes, la detección de protocolos y la visibilidad a nivel de plataforma.

Para saber más sobre Plaspy visite https://www.plaspy.com y revise capacidades adicionales de la plataforma. Para métodos de configuración específicos del dispositivo, notas de firmware y guías del fabricante consulte la documentación actual en el sitio de GlobalSat https://www.globalsat.com.tw/
