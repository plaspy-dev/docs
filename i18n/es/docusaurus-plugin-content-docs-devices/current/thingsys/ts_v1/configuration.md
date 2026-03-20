---
slug: /thingsys/ts_v1/configuration
id: ts_v1-configuration
sidebar_label: Configuration
title: ThingSys - TS-V1 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el ThingSys TS-V1 para Plaspy con ajustes públicos de servidor y comandos SMS de ejemplo para APN y servidor
keywords:
  - Configuración ThingSys TS-V1
  - Configuración TS-V1 para Plaspy
  - Ajustes servidor TS-V1
  - Configuración GPS ThingSys
  - Configuración SMS TS-V1
  - Seguimiento de flotas ThingSys
  - Integración GPS Plaspy
  - Configuración seguimiento vehicular
  - Guía instalación TS-V1
  - Ajustes servidor Plaspy
---

# ThingSys - Configuración TS-V1

Esta página documenta el contexto público de configuración para usar el rastreador ThingSys TS-V1 con Plaspy. Se centra en los detalles prácticos necesarios para apuntar el dispositivo a Plaspy y confirma qué ajustes públicos de servidor espera Plaspy. Cuando los comandos del fabricante están disponibles públicamente, se incluyen ejemplos para ilustrar el flujo típico de configuración.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo cuando este se conecta. Los pasos de configuración del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por eso use esta guía como referencia práctica y verifique los detalles específicos del equipo en la documentación del fabricante cuando sea necesario.

## Resumen de la configuración

Esta configuración prepara el TS-V1 para reportar datos de ubicación y eventos a la plataforma Plaspy usando el endpoint público y el puerto de Plaspy. El proceso normalmente incluye establecer las credenciales APN si la SIM lo requiere, apuntar el rastreador al servidor de Plaspy y comprobar que el dispositivo sea visible en Plaspy.

- Configure APN, usuario APN y contraseña APN si el rastreador usa conexión de datos móviles.
- Apunte el dispositivo al dominio o IP del servidor de Plaspy y establezca el puerto compartido que usa Plaspy.
- Elija el protocolo de transporte (UDP o TCP) en el dispositivo si el firmware lo solicita y lo soporta.
- Valide la conectividad y confirme que los reportes de posición y eventos aparezcan en Plaspy.
- Opcionalmente, realice un restablecimiento de fábrica o una verificación de configuración vía SMS si el firmware del dispositivo lo permite.

## Ajustes de servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados)  
- Transport: UDP o TCP están soportados por el rastreador para el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un dispositivo TS-V1 instalado y con alimentación, con antenas y cableado requeridos correctamente conectados.
- Una SIM móvil funcional con un plan de datos activo y los detalles APN correctos para el operador.
- Acceso al método de configuración del fabricante ThingSys, como comandos SMS o software del proveedor.
- Conocimiento de la contraseña del equipo si se requiere para la configuración (la contraseña pública por defecto es 123456).
- Capacidad para enviar y recibir SMS desde un número autorizado si se utiliza la configuración por SMS.
- Acceso a una cuenta de Plaspy o a un usuario administrador para confirmar que el dispositivo aparece después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El TS-V1 puede configurarse para enviar sus mensajes de posición y eventos directamente a Plaspy estableciendo el endpoint y puerto del servidor en el dispositivo. Una vez apuntado al servidor de Plaspy, la plataforma gestiona la detección del protocolo e integra los datos entrantes para su seguimiento y reporte.

- El rastreador sube datos de ubicación y eventos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando se establece la conexión.
- Las actualizaciones de posición, alarmas y mensajes de estado se hacen visibles en la interfaz de Plaspy para seguimiento en tiempo real e historial.
- El reporte de eventos y telemetría permite monitoreo operativo, alertas y notificaciones de geocerca en Plaspy.
- Si se debe seleccionar el transporte, elija UDP o TCP y asegúrese de guardar el dispositivo con el puerto 8888.

## Flujo típico de configuración

1. Acceda al método oficial de configuración ThingSys para el TS-V1, como comandos SMS o la herramienta de configuración del proveedor.
2. Ingrese en los ajustes de servidor del dispositivo el dominio d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el dispositivo si el firmware solicita elegir el transporte.
5. Configure el APN, el usuario APN y la contraseña APN mediante el método del fabricante si la SIM lo requiere.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador necesita un reboot para aplicar cambios.
7. Valide que el rastreador reporte a Plaspy comprobando los mensajes entrantes y las actualizaciones de ubicación en la plataforma.

## Comandos de configuración de ejemplo

El TS-V1 soporta configuración mediante SMS. Los siguientes comandos SMS públicos se presentan en el orden en que aparecen en el contenido proporcionado por el fabricante. Preserve los marcadores de posición tal como se muestran cuando envíe valores reales.

- Nota: la contraseña de dispositivo por defecto en el contenido público es 123456. Úsela cuando la sintaxis del comando requiera un prefijo de contraseña.

1. Restablecimiento de fábrica opcional (usar sólo si es necesario durante la configuración inicial)
```text
FORMAT
```

2. Establecer el APN del operador (reemplazar {{apn}} por el APN de su operador)
```text
apn123456 {{apn}}
```

3. Establecer el usuario APN (reemplazar {{apnu}} por el usuario APN)
```text
apnuser123456 {{apnu}}
```

4. Establecer la contraseña APN (reemplazar {{apnp}} por la contraseña APN)
```text
apnpasswd123456 {{apnp}}
```

5. Establecer la IP y el puerto del servidor GPRS para apuntar el dispositivo a Plaspy (ejemplo público usa la IP y puerto de Plaspy)
```text
ip54.85.159.138 8888
```

6. Consultar ajustes actuales (comando de verificación)
```text
CXZT
```

Explicación de marcadores de posición:
- {{apn}} es la cadena APN del operador necesaria para la conectividad de datos.
- {{apnu}} es el nombre de usuario APN si su operador lo requiere.
- {{apnp}} es la contraseña APN si su operador lo requiere.

Envíe cada comando como SMS desde un número autorizado si el dispositivo requiere configuración por SMS. El orden es importante en la configuración inicial cuando el APN y el servidor deben estar presentes antes de que pueda comenzar el reporte de datos.

## Notas de configuración

- Las variantes de firmware y regionales pueden cambiar la sintaxis de comandos o las funcionalidades soportadas; verifique los comandos según la versión de firmware de su dispositivo.
- Algunos instaladores prefieren usar la herramienta de configuración del fabricante en lugar de SMS para aprovisionamiento masivo o más seguro; siga el flujo oficial de ThingSys cuando esté disponible.
- Elija TCP o UDP según la preferencia del instalador; Plaspy soporta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Mantenga un registro de la contraseña del dispositivo y de los números autorizados de gestión para preservar la seguridad de la configuración remota.
- Use el comando de verificación (CXZT) tras la configuración para confirmar que los ajustes se aplicaron correctamente.

## Por qué usar Plaspy con esta configuración

Usar el TS-V1 con Plaspy centraliza la ubicación de los vehículos, el reporte de eventos y la telemetría en una única plataforma, facilitando la gestión de flotas, la respuesta a alarmas y el análisis del uso de los vehículos. La capacidad del TS-V1 para aceptar configuración de servidor y APN vía SMS o mediante herramientas del proveedor permite un aprovisionamiento rápido para reportar a Plaspy en tiempo real y supervisar operaciones.

Para obtener más información sobre Plaspy y cómo gestiona las integraciones de dispositivos, visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware y sintaxis de comandos más actuales, verifique la información en el sitio del fabricante https://www.thingsys.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
