---
slug: /tk_star/tk750/configuration
id: tk750-configuration
sidebar_label: Configuration
title: TK-Star - TK750 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador TK-Star TK750 a Plaspy usando servidor compartido y comandos SMS
keywords:
  - configuración TK-Star TK750
  - instalación TK-Star TK750
  - configuración TK750 en Plaspy
  - configuración rastreador GPS TK750
  - configuración rastreador en Plaspy
  - configuración servidor rastreador GPS
  - configuración rastreador vehicular
  - configuración seguimiento de flotas
  - configuración GPS TK-Star
  - configuración servidor TK750
---

# TK-Star - Configuración del TK750

Esta página describe el contexto público de configuración para usar el rastreador TK-Star TK750 con Plaspy. Se centra en los pasos prácticos y de acceso público necesarios para apuntar el TK750 al servidor de Plaspy y validar la conectividad. La guía utiliza, cuando está disponible, el flujo de comandos SMS proporcionado por el fabricante y detalla el endpoint y el puerto compartidos de Plaspy que usará para integrar el dispositivo en la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK750 suele aceptar comandos por SMS para la configuración básica; la contraseña por defecto en los ejemplos públicos que siguen es 123456 y debe confirmarse para su unidad antes de enviar comandos.

## Resumen de la configuración

Configurar el TK750 para Plaspy prepara el dispositivo para enviar datos de posición y eventos a la plataforma, de modo que vehículos y activos aparezcan en los mapas en tiempo real y en las herramientas de informes. La secuencia pública de configuración se centra en ajustar el APN para la conectividad de datos, programar el endpoint y puerto de Plaspy, y activar GPRS o modo de datos por paquetes para que el dispositivo alcance el servidor.

- Programar el APN del dispositivo y las credenciales del APN si son necesarias para que el rastreador tenga acceso a datos móviles.
- Apuntar el TK750 al endpoint y puerto del servidor de Plaspy para que la telemetría se envíe a la plataforma.
- Elegir el modo de transporte (UDP o TCP) si el rastreador requiere selección de transporte.
- Establecer un intervalo de subida apropiado para controlar la frecuencia de envío de posiciones a Plaspy.
- Validar que el dispositivo pueda registrarse en la red móvil y confirmar la conectividad de la sesión de datos.
- Verificar que el dispositivo aparezca y reporte correctamente en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de configurar

- Una unidad TK750 con alimentación, instalada o temporalmente alimentada para configuración y pruebas.
- Una SIM celular válida con servicio de datos y la información del APN del operador de su red móvil.
- Acceso al método de configuración del fabricante TK-Star, como comandos SMS o software del proveedor.
- Conocimiento de la contraseña del dispositivo si el rastreador la requiere para la configuración (los ejemplos públicos usan 123456).
- Una cuenta en Plaspy y la confirmación de que puede añadir y monitorear dispositivos en la plataforma.
- Un sitio con cobertura móvil adecuada para el registro inicial y las pruebas.

## Cómo se conecta este rastreador a Plaspy

El TK750 se configura para enviar posición, movimiento y eventos de alarma a Plaspy abriendo una sesión de datos GPRS y enviando la telemetría al endpoint y puerto compartidos de Plaspy. Una vez configurado el endpoint y el transporte, Plaspy recibe los paquetes del dispositivo y detecta automáticamente el protocolo para mostrar el dispositivo en la plataforma.

- El dispositivo envía actualizaciones periódicas de ubicación a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del operador.
- Plaspy interpreta la telemetría y los eventos de alarma y los asigna a su cuenta para monitorización en tiempo real.
- El intervalo de subida determina la frecuencia con la que el dispositivo reporta al servidor de Plaspy.
- Tras una configuración exitosa, el dispositivo queda visible en Plaspy para seguimiento en vivo y alertas de eventos.

## Flujo típico de configuración

1. Acceda al método oficial de configuración TK-Star para su dispositivo, como el conjunto de comandos SMS, la herramienta web del proveedor o la app de configuración del fabricante.
2. Asegúrese de que la tarjeta SIM esté activa y configure el APN del operador y las credenciales del APN si su red las requiere.
3. Ingrese el endpoint de Plaspy usando d.plaspy.com o la IP 54.85.159.138 como dirección del servidor GPRS.
4. Configure el puerto en 8888 y elija UDP o TCP si el dispositivo solicita selección de transporte.
5. Establezca el intervalo de subida deseado para que el dispositivo informe con la frecuencia adecuada a su caso de uso.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento del fabricante lo requiere.
7. Valide que el dispositivo se registre en la red móvil, establezca una sesión de datos y reportee a Plaspy comprobando su cuenta en Plaspy para telemetría entrante.

## Ejemplo de comandos de configuración

El TK750 comúnmente acepta configuración mediante comandos SMS. La siguiente secuencia pública de comandos aparece en la documentación del fabricante y usa la contraseña por defecto 123456. Envíe cada línea como un SMS individual al número del dispositivo, a menos que la documentación de su proveedor indique métodos agrupados o alternativos.

- Restablecimiento inicial u opcional a valores de fábrica (use sólo si necesita restaurar los valores por defecto):
```text
begin123456
```

- Configurar el APN del operador (reemplazar [apn] con la cadena APN de su operador):
```text
apn123456 [apn]
```

- Configurar el nombre de usuario del APN si es necesario (reemplazar [apnu] con el nombre de usuario del APN):
```text
apnuser123456 [apnu]
```

- Configurar la contraseña del APN si es necesaria (reemplazar [apnp] con la contraseña del APN):
```text
apnpasswd123456 [apnp]
```

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto indicados en la documentación de Plaspy:
```text
adminip123456 54.85.159.138 8888
```

- Establecer el intervalo de subida a 60 segundos (ajuste el valor según sea necesario):
```text
upload123456 60
```

- Cambiar el dispositivo a modo GPRS para que use datos móviles para el reporte:
```text
gprs123456
```

Notas sobre los comandos y los marcadores:
- La contraseña por defecto en estos ejemplos públicos es 123456. Confirme la contraseña de su dispositivo antes de enviar cualquier comando.
- Mantenga los marcadores [apn], [apnu] y [apnp] y sustitúyalos por el APN de su operador, el nombre de usuario del APN y la contraseña del APN respectivamente.
- El comando adminip anterior establece la IP y el puerto del servidor a Plaspy. Si el firmware de su dispositivo admite nombres de dominio, puede configurar d.plaspy.com en lugar de la IP; verifique el soporte en la documentación oficial del TK-Star antes de usar un dominio.
- Los comandos se muestran en el orden que se suele emplear para la configuración inicial; siga las indicaciones del fabricante respecto a agrupación de comandos, pausas entre SMS o confirmaciones de comando.

## Notas de configuración

- Las versiones de firmware y las variantes regionales de hardware pueden aceptar formatos de comandos ligeramente distintos o admitir nombres de dominio en lugar de direcciones IP; confirme siempre con la documentación TK-Star correspondiente a su firmware.
- La configuración por SMS es un método público habitual para la puesta en marcha del TK750; pueden existir también herramientas del proveedor o utilidades de configuración por USB/serie según el paquete de su dispositivo.
- Elija UDP o TCP en función de consideraciones de red y de las recomendaciones de su instalador; Plaspy soporta ambos protocolos y detectará automáticamente cuál utiliza el dispositivo.
- Mantenga la contraseña del dispositivo segura y evite dejar credenciales por defecto accesibles a terceros no autorizados.
- El intervalo de subida afecta la carga en el servidor y el consumo de batería/datos; ajústelo para equilibrar la inmediatez de la información y el costo en su despliegue.

## Por qué usar Plaspy con esta configuración

Usar el TK-Star TK750 con Plaspy brinda a los operadores de flotas visibilidad en tiempo real, alertas basadas en eventos y reproducción histórica de rutas mediante un endpoint y puerto consistentes. Los ajustes compartidos de Plaspy simplifican la integración porque la plataforma detecta automáticamente los protocolos de los dispositivos y usa el mismo puerto para todos los rastreadores compatibles, permitiéndole concentrarse en la implementación y los flujos operativos en lugar de en detalles de servidor específicos.

Learn more about Plaspy and how it supports fleet management and theft mitigation at https://www.plaspy.com. For the most current device-specific configuration commands, firmware notes, and installation details consult the TK-Star official website https://www.tk-star.com/ to verify manufacturer guidance and any changes to setup methods over time.
