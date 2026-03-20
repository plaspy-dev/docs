---
slug: /thingsys/ts_v6ws/configuration
id: ts_v6ws-configuration
sidebar_label: Configuration
title: ThingSys - TS-V6Ws Configuration
sidebar_class_name: menu_item_tracker
description: Configurar ThingSys TS-V6Ws para usar con Plaspy, servidor público y guía de configuración por SMS o GPRS
keywords:
  - Configuración ThingSys TS-V6Ws
  - Configuración TS-V6Ws
  - Configuración rastreador GPS ThingSys
  - Configuración TS-V6Ws Plaspy
  - Configuración rastreador Plaspy
  - Configuración servidor TS-V6Ws
  - Configuración rastreador GPS
  - Configuración seguimiento de vehículos
  - Rastreador gestión de flotas
  - Guía configuración TS V6Ws
---

# ThingSys - Configuración TS-V6Ws

Esta página describe el contexto público de configuración para usar el ThingSys TS-V6Ws con Plaspy. Resume los ajustes de servidor prácticos y los pasos de puesta en marcha que permiten al TS-V6Ws reportar ubicación y telemetría al servicio en la nube de Plaspy, e incluye ejemplos públicos de comandos SMS extraídos de las notas de configuración del fabricante.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. El TS-V6Ws admite configuración por SMS y reporte por GPRS; utilice las secciones siguientes para preparar el dispositivo para Plaspy y verifique los detalles con la documentación y notas de firmware de ThingSys.

## Resumen de la configuración

El objetivo de la configuración es apuntar el TS-V6Ws a Plaspy, asegurarse de que el dispositivo tenga una ruta de datos operativa y validar que el rastreador aparezca en la plataforma Plaspy. Los ejemplos públicos incluidos muestran cómo establecer el APN y los valores de servidor mediante comandos SMS y cómo comprobar la configuración en el equipo.

- Establecer el APN del dispositivo, las credenciales del APN (si son necesarias) y la dirección del servidor GPRS para que el rastreador pueda abrir una sesión de datos hacia Plaspy.
- Elegir el transporte (UDP o TCP) si el equipo solicita una selección de transporte y configurar el puerto 8888, que es el usado por Plaspy.
- Verificar los valores predeterminados del dispositivo como la contraseña de ejemplo y realizar un reinicio de fábrica solo cuando sea necesario.
- Probar la conectividad confirmando que el dispositivo reporte al endpoint compartido de Plaspy y aparezca en el panel de Plaspy.
- Utilizar las herramientas de configuración del fabricante o SMS según lo admita el TS-V6Ws para aplicar y validar estos valores.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en DNS.
- IP del servidor 54.85.159.138 como el endpoint publicado de Plaspy.
- Puerto 8888 que Plaspy utiliza para todos los dispositivos compatibles.
- Soporte de transporte UDP o TCP — el dispositivo puede configurarse para usar cualquiera de los dos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma interpretará los mensajes entrantes sin selección manual de protocolo.

## Requisitos previos habituales

- Una unidad TS-V6Ws con alimentación instalada o accesible para la configuración y pruebas iniciales.
- Una SIM celular activa que soporte datos y SMS para enviar comandos de configuración inicial si se usan métodos por SMS.
- Conocimiento de la contraseña predeterminada del dispositivo (la configuración pública de ejemplo usa 123456) y del método de configuración del fabricante.
- Acceso a las herramientas de configuración de ThingSys o capacidad para enviar mensajes SMS al número de la SIM del equipo.
- Registro del IMEI o identificador del dispositivo para confirmar el rastreador correcto en la cuenta de Plaspy después de comenzar a reportar.
- Una cuenta Plaspy lista para recibir el dispositivo una vez que empiece a enviar datos.

## Cómo se conecta este rastreador a Plaspy

El TS-V6Ws se configura para enviar información de ubicación, estado y alarmas al endpoint y puerto compartidos de Plaspy; Plaspy luego analiza el protocolo del rastreador y muestra los datos en mapas, alertas e informes. El reporte puede ser en tiempo real mediante sesiones GPRS/4G continuas o de forma periódica mediante envíos por trazas, según la configuración.

- El dispositivo abre una sesión de datos al servidor de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los mensajes del dispositivo usan transporte UDP o TCP según lo configurado en el rastreador; Plaspy acepta ambos en el puerto 8888.
- El rastreador envía ubicación, estado de ignición/ACC y eventos de alarma para que Plaspy pueda ofrecer visibilidad operacional.
- Plaspy detecta automáticamente el protocolo del rastreador e interpreta los mensajes entrantes para mapeo y alertas.
- La visibilidad en Plaspy se valida cuando el dispositivo comienza a reportar regularmente y aparece en el mapa de la flota y en las listas de telemetría.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de ThingSys o al software correspondiente, o prepárese para usar la configuración por SMS si su firmware lo admite.
2. Ingrese la dirección del servidor Plaspy como dominio d.plaspy.com o como la dirección IP 54.85.159.138 en los ajustes de servidor/GPRS del dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Seleccione UDP o TCP como transporte si el equipo lo requiere; guarde la selección.
5. Configure el APN y las credenciales del APN que requiera el operador de la SIM, usando el método del fabricante o comandos SMS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo solicita para activar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy revisando los mensajes entrantes y confirmando que el rastreador aparece en la vista de flota de Plaspy.

## Comandos de configuración de ejemplo

Los ejemplos públicos de configuración del TS-V6Ws incluyen comandos SMS usados para establecer APN, credenciales del APN, el servidor GPRS y para realizar consultas de verificación y reinicio opcional a fábrica. La configuración de ejemplo usa la contraseña predeterminada del dispositivo 123456 en la sintaxis de los comandos mostrada.

1. Reinicio a fábrica opcional (solo use si necesita volver a valores de fábrica)
```
FORMAT
```
2. Establecer APN del operador (reemplazar {{apn}} con la cadena APN del operador móvil)
```
apn123456 {{apn}}
```
3. Establecer nombre de usuario del APN (reemplazar {{apnu}} con el usuario del APN si es necesario)
```
apnuser123456 {{apnu}}
```
4. Establecer contraseña del APN (reemplazar {{apnp}} con la contraseña del APN si es necesaria)
```
apnpasswd123456 {{apnp}}
```
5. Establecer el servidor GPRS a Plaspy usando la IP y el puerto (esto configura 54.85.159.138 y el puerto 8888 como servidor del dispositivo)
```
ip54.85.159.138 8888
```
6. Consultar ajustes actuales (comando de verificación)
```
CXZT
```

Notas sobre los comandos anteriores:
- Estos ejemplos se envían como mensajes SMS al número de la SIM del rastreador usando el formato de contraseña del dispositivo mostrado (contraseña de ejemplo 123456).
- Mantenga los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por los valores del APN de su operador al enviar los SMS.
- Realice un reinicio de fábrica (FORMAT) solo si es necesario; borrará las configuraciones personalizadas y devolverá el dispositivo a los valores de fábrica.
- Después de establecer el servidor a 54.85.159.138 8888, alternativamente puede establecer el nombre DNS d.plaspy.com mediante las herramientas del fabricante si se admite la entrada de servidor basada en DNS.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos y los formatos SMS soportados; siempre verifique las notas de la versión de ThingSys para la revisión de su dispositivo.
- Los dispositivos que admiten UDP y TCP deben configurarse de acuerdo con su topología de red y el comportamiento del operador; UDP es habitual en rastreadores, pero TCP puede ser preferible si los operadores imponen restricciones sobre UDP.
- Cuando la configuración por SMS esté disponible, es un recurso conveniente en campo; sin embargo, la herramienta de configuración del fabricante o la interfaz web pueden ofrecer una experiencia de configuración más completa.
- Cambie la contraseña predeterminada del dispositivo tras la configuración inicial si el dispositivo lo permite para mejorar la seguridad operativa.
- Confirme los valores de APN y los requisitos de credenciales con el proveedor de la SIM antes de aplicar los comandos del APN.

## Por qué usar Plaspy con esta configuración

Usar el ThingSys TS-V6Ws con Plaspy ofrece un camino sencillo hacia la visibilidad de flotas y activos. El desempeño GNSS del dispositivo, la conectividad 4G LTE con fallback a 2G y la capacidad de reportar vía GPRS lo hacen adecuado tanto para rastreo en tiempo real como para reportes periódicos económicos. Apuntar el rastreador al servidor y puerto compartidos de Plaspy garantiza una incorporación rápida y un manejo consistente del protocolo por parte de la plataforma.

Para obtener más información sobre Plaspy y cómo soporta rastreadores como el TS-V6Ws visite https://www.plaspy.com. Para métodos de configuración específicos más actuales, comportamiento de firmware y detalles del fabricante, verifique la información más reciente en el sitio oficial de ThingSys en https://www.thingsys.com/.
