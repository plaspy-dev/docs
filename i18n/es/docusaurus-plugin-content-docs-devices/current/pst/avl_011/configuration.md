---
slug: /pst/avl_011/configuration
id: avl_011-configuration
sidebar_label: Configuration
title: PST - AVL-011 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar PST AVL 011 para usar con Plaspy mediante servidor público y comandos SMS
keywords:
  - configuración PST AVL 011
  - instalación PST AVL 011
  - PST AVL 011 Plaspy
  - configuración rastreador GPS PST
  - configuración servidor AVL 011
  - configuración rastreador GPS Plaspy
  - configuración seguimiento vehicular
  - configuración rastreador Plaspy
  - configuración SMS rastreador GPS
  - configuración seguimiento de flotas
---

# PST - AVL-011 Configuración

Esta página describe el contexto de configuración pública para usar el rastreador PST AVL-011 con Plaspy. Explica los ajustes compartidos del servidor Plaspy y los pasos prácticos que puede seguir para preparar un AVL-011 y que se comunique con la plataforma. Cuando existen comandos públicos del fabricante se presentan como ejemplos por SMS para que pueda aplicarlos con el método estándar del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas que utilice el instalador. El modelo AVL-011 admite configuración por SMS según la documentación pública y los ejemplos a continuación usan la contraseña por defecto 000000 según el conjunto de comandos público.

## Resumen de la configuración

El objetivo al configurar un AVL-011 para Plaspy es apuntar el rastreador al endpoint del servidor Plaspy, establecer el APN del operador y el modo de transporte, y validar que el dispositivo reporte correctamente a la plataforma. Para el AVL-011 el fabricante facilita comandos SMS para ajustes comunes como zona horaria, APN, host del servidor y selección de modo.

- Prepare el rastreador para comunicarse con Plaspy configurando el APN correcto y el modo GPRS adecuado.  
- Apunte el rastreador al endpoint del servidor Plaspy para que la ubicación y los eventos se enruten a su cuenta.  
- Elija el protocolo de transporte apropiado y asegúrese de que el puerto correcto esté configurado.  
- Valide la conectividad confirmando que el dispositivo aparezca y reporte en la plataforma Plaspy.  
- Use SMS o las herramientas del fabricante según lo indique la documentación del dispositivo.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP on port 8888  
- automatic protocol detection in Plaspy so the platform detects the device protocol when data is received  
Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador.

## Requisitos típicos antes de la configuración

- El dispositivo debe estar encendido y accesible para recibir comandos SMS de configuración o para conectarlo a la herramienta del fabricante.  
- Una tarjeta SIM activa con plan de datos y los valores APN del operador listos para configurar.  
- Posibilidad de enviar mensajes SMS al dispositivo si va a usar configuración por SMS.  
- Conocimiento de la contraseña actual del dispositivo; los ejemplos públicos usan la contraseña por defecto 000000.  
- Acceso al método oficial de configuración del fabricante o al software correspondiente para la revisión de firmware de su AVL-011.  
- Acceso básico a su cuenta de Plaspy para validar que el dispositivo aparece y reporta después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El AVL-011 se configura para reportar al endpoint y puerto compartidos de Plaspy para que los datos de ubicación y eventos lleguen a la plataforma Plaspy para monitoreo e informes. La configuración hace que el dispositivo envíe datos por GPRS al servidor de Plaspy y la plataforma gestiona la detección de protocolo y el manejo de sesiones.

- El rastreador se apunta al host o IP del servidor Plaspy y se configura para usar el puerto 8888.  
- El dispositivo transmite datos por GPRS y usa transporte UDP o TCP según lo configurado en el equipo.  
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe tráfico entrante.  
- Una vez conectado, el dispositivo queda visible en Plaspy para monitoreo en tiempo real y reportes de eventos.  
- Valide la conexión comprobando que el rastreador esté listado y se actualice en su cuenta Plaspy.

## Flujo habitual de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el AVL-011, o prepárese para enviar los comandos SMS documentados.  
2. Ingrese d.plaspy.com o 54.85.159.138 como host del servidor según si el dispositivo acepta nombre de host o requiere una IP.  
3. Configure el puerto 8888 en la entrada del servidor GPRS.  
4. Seleccione UDP o TCP si el equipo solicita elección de transporte; Plaspy soporta ambos en el puerto 8888.  
5. Configure el APN de la SIM y los campos de usuario y contraseña del APN si su operador los requiere.  
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo indican.  
7. Verifique que el dispositivo reporte a Plaspy y aparezca en la plataforma con actualizaciones en vivo.

## Ejemplos de comandos de configuración

Para configurar el rastreador envíe los comandos siguientes por SMS. La configuración de ejemplo usa la contraseña por defecto 000000. Reemplace marcadores como {{apn}}, {{apnu}} y {{apnp}} con los valores de su operador cuando corresponda.

- Establecer la zona horaria a UTC 0
```text
W000000,032,0
```

- Configurar el APN del operador
```text
W000000,011,{{apn}},{{apnu}},{{apnp}}
```
Nota: {{apn}} es el APN de su operador. {{apnu}} y {{apnp}} son los campos opcionales de usuario y contraseña del APN que deben incluirse solo si su operador los exige.

- Configurar el servidor GPRS con la IP y el puerto de Plaspy
```text
W000000,012,54.85.159.138,8888
```
Si su equipo acepta nombres de host, puede ingresar d.plaspy.com donde la interfaz o la sintaxis del comando requiera un host.

- Cambiar el rastreador al modo GPRS
```text
W000000,013,1
```

Estos comandos son ejemplos públicos de la documentación del fabricante y conservan la contraseña por defecto 000000. Tras la configuración inicial se recomienda seguir las indicaciones del fabricante para cambiar la contraseña por defecto por motivos de seguridad.

## Notas de configuración

- El formato de los comandos SMS mostrado usa la contraseña por defecto 000000. Confirme la contraseña por defecto de su unidad y cámbiela si es necesario.  
- Algunas revisiones de firmware pueden modificar la sintaxis o el comportamiento de los comandos. Siempre confirme el conjunto de comandos para la versión de firmware de su dispositivo.  
- Si su dispositivo admite ingresar un nombre de host use d.plaspy.com; de lo contrario, utilice la IP 54.85.159.138 como en el ejemplo público.  
- Elija UDP o TCP según la preferencia del instalador y la confiabilidad de la red; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.  
- La configuración por SMS está soportada en el conjunto de comandos público, pero también puede usar las herramientas oficiales del fabricante si están disponibles para configuraciones masivas o cableadas.

## Por qué usar Plaspy con esta configuración

Configurar el AVL-011 para reportar a Plaspy ofrece a las organizaciones visibilidad centralizada de la ubicación y el reporte de eventos, usando una configuración de servidor consistente. Plaspy gestiona la detección de protocolos y proporciona un punto de ingestión unificado para que pueda administrar múltiples modelos de dispositivos sin diferencias de puerto por dispositivo.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions and command sets on the manufacturer's official website before deployment.
