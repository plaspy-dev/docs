---
slug: /nvs/signal_s_2117/configuration
id: signal_s_2117-configuration
sidebar_label: Configuration
title: NVS - SIGNAL S-2117 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del NVS SIGNAL S-2117 con ajustes de servidor Plaspy comandos SMS y pasos para seguimiento de flotas
keywords:
  - NVS SIGNAL S-2117
  - Configuración NVS SIGNAL S-2117
  - Configuración del rastreador NVS
  - Ajustes APN SIGNAL S-2117
  - Configuración de rastreador Plaspy
  - Configuración servidor Plaspy
  - Configuración de rastreador GPS
  - Configuración de seguimiento de vehículo
  - Configuración de seguimiento de flotas
  - Integración rastreador GPS NVS
---

# NVS - SIGNAL S-2117 Configuración

Esta página documenta el contexto público de configuración para usar el NVS SIGNAL S-2117 con Plaspy. Resume los pasos prácticos y los comandos SMS públicos que se usan comúnmente para preparar el equipo y que envíe datos a Plaspy, y destaca los valores de servidor compartidos que requiere Plaspy. Use esta página como referencia de configuración y consulte la documentación oficial de NVS para detalles específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El SIGNAL S-2117 soporta configuración por SMS en los ejemplos públicos que se muestran a continuación, y la descripción del dispositivo indica un protocolo abierto y un receptor certificado NV08C que lo hacen adecuado para integrarlo en sistemas de monitoreo y despacho.

## Resumen de configuración

Este proceso prepara el SIGNAL S-2117 para comunicarse con Plaspy, de modo que los mensajes de ubicación y estado del vehículo lleguen al servidor de Plaspy y sean visibles en su cuenta. La configuración práctica incluye establecer el APN y parámetros GPRS, apuntar el dispositivo a los valores de servidor de Plaspy y habilitar el envío de datos para que la plataforma pueda detectar automáticamente el protocolo del rastreador.

- Configure el APN del operador de la SIM y las credenciales APN opcionales para que el dispositivo pueda abrir una conexión GPRS.
- Configure la dirección y el puerto del servidor GPRS para apuntar a Plaspy y así encaminar la telemetría hacia la plataforma.
- Habilite el modo de datos GPRS o el modo de red equivalente para que el rastreador envíe actualizaciones periódicas de posición.
- Valide la conectividad y la visibilidad en Plaspy confirmando que el rastreador reporta al servidor y puerto compartidos.
- Use los comandos SMS provistos o las herramientas del fabricante para aplicar y verificar los ajustes cuando corresponda.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects to the shared server and port

## Requisitos previos típicos

- Una unidad SIGNAL S-2117 instalada y con alimentación, con una tarjeta SIM activa y habilitada para datos y SMS.
- Conocimiento de los ajustes APN provistos por su operador móvil (nombre APN y, opcionalmente, usuario y contraseña).
- Acceso para enviar comandos SMS al rastreador o acceso a la herramienta oficial de configuración NVS según su método preferido.
- La contraseña por defecto del dispositivo si los comandos SMS o el software de configuración la requieren. En los ejemplos públicos se usa la contraseña 123456.
- Una ventana de prueba planificada para validar que el rastreador reporta a Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El SIGNAL S-2117 se configura para abrir una conexión GPRS y enviar mensajes de ubicación y estado del equipo al endpoint del servidor Plaspy. Una vez que el rastreador alcance el servidor y puerto configurados, Plaspy detectará automáticamente el protocolo del dispositivo y mostrará los datos en la plataforma.

- El dispositivo se apunta al servidor de Plaspy usando el dominio del servidor o la IP y el puerto compartido.
- Se habilita el modo GPRS para que el rastreador pueda transmitir telemetría a través de la conexión de datos móviles.
- El rastreador envía reportes periódicos o basados en eventos al endpoint de Plaspy para que los datos de ubicación y alarmas sean visibles.
- La conexión se valida cuando Plaspy recibe los mensajes del dispositivo y muestra el rastreador como en línea.
- La detección automática de protocolo de Plaspy elimina, en la mayoría de los casos, la necesidad de seleccionar un protocolo manualmente.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración NVS o al software, o prepárese para enviar comandos SMS según las instrucciones de NVS.
2. Configure el APN del dispositivo con el APN de su operador para que el rastreador pueda establecer la conexión GPRS.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del equipo.
4. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
5. Elija UDP o TCP si el equipo solicita selección de transporte y ambos están soportados.
6. Aplique o guarde la configuración en el rastreador y reinicie el dispositivo si el firmware lo requiere.
7. Valide que el dispositivo reporta a Plaspy comprobando que la plataforma recibe los primeros mensajes y que el equipo aparece en línea.

Si prefiere la configuración por SMS, siga los comandos del fabricante que se muestran abajo y luego valide la conectividad en Plaspy.

## Ejemplos de comandos de configuración

Los siguientes comandos SMS públicos aparecen en ejemplos de NVS para el SIGNAL S-2117. Las muestras usan la contraseña por defecto del dispositivo 123456. Reemplace los marcadores y valores para que coincidan con el APN y las credenciales de su operador. Los pasos etiquetados se presentan en el orden recomendado.

- Reinicio de fábrica inicial opcional (solo cuando sea necesario):
```
begin123456
```

- Ajustar la zona horaria del dispositivo a UTC 0:
```
time zone123456 0
```

- Configurar el APN del operador. Reemplace {{apn}} por el nombre APN de su SIM:
```
apn123456 {{apn}}
```
Nota: {{apn}} es un marcador que representa la cadena APN de su operador.

- Establecer usuario y contraseña del APN si su operador los requiere. Reemplace {{apnu}} y {{apnp}} con el usuario y la contraseña del APN:
```
up123456 {{apnu}} {{apnp}}
```
Nota: Mantenga los marcadores si su APN no tiene usuario o contraseña.

- Configurar el servidor GPRS apuntando a Plaspy usando la IP pública y el puerto. Esto dirige el rastreador hacia Plaspy para la telemetría:
```
adminip123456 54.85.159.138 8888
```
Puede usar el dominio del servidor en interfaces de dispositivo que acepten nombres de host en lugar de la dirección IP:
- Use d.plaspy.com cuando la entrada de nombre de host esté soportada.

- Cambiar el dispositivo a modo GPRS. El equipo acepta cualquiera de estos comandos:
```
gprs123456,1,1
```
o
```
gprs123456
```

- Verificar o consultar la configuración actual:
```
check123456
```

Siga el orden de comandos anterior para la configuración inicial. Después de enviar los comandos, permita al dispositivo tiempo para registrarse en la red y abrir una sesión de datos antes de validar la conexión en Plaspy.

## Notas de configuración

- Los comandos SMS de ejemplo usan la contraseña pública por defecto 123456. Confirme la contraseña correcta de su unidad antes de enviar comandos y cámbiela si el fabricante lo recomienda.
- La configuración por SMS se muestra en ejemplos públicos, pero pueden existir herramientas NVS o una interfaz de software que ofrezcan una experiencia de configuración más controlada.
- Las opciones de transporte TCP y UDP están soportadas; elija el transporte requerido por su despliegue o deje el valor por defecto si Plaspy detectará el protocolo automáticamente.
- Variaciones de firmware y revisiones de hardware pueden cambiar la sintaxis de comandos o los parámetros disponibles. Siempre verifique la respuesta del dispositivo después de cada comando.
- Los campos de usuario y contraseña del APN son opcionales para muchos operadores. Use el comando up solo cuando su operador requiera autenticación.

## Por qué usar Plaspy con esta configuración

Configurar el NVS SIGNAL S-2117 para reportar a Plaspy proporciona a las organizaciones visibilidad unificada de la ubicación y el estado de los vehículos en una sola plataforma. Dado que Plaspy utiliza un endpoint de servidor compartido y detección automática de protocolo, integrar este rastreador normalmente solo requiere los ajustes de APN y servidor mostrados arriba, lo que simplifica la incorporación para flotas y despliegues de monitoreo.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y consulte al fabricante para la documentación más actual del dispositivo en https://www.nvs-ts.ru/. Las especificaciones del fabricante, el comportamiento del firmware y los métodos exactos de configuración pueden cambiar con el tiempo, por lo que debe verificar los detalles específicos del equipo en la documentación oficial de NVS.
