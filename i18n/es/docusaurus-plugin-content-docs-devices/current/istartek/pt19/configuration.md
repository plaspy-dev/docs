---
slug: /istartek/pt19/configuration
id: pt19-configuration
sidebar_label: Configuration
title: iStartek - PT19 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar iStartek PT19 con ajustes de servidor Plaspy y comandos SMS para integración y monitoreo confiables
keywords:
  - configuración iStartek PT19
  - instalación iStartek PT19
  - configuración PT19 Plaspy
  - ajuste rastreador GPS PT19
  - configuración rastreador vestible iStartek
  - configuración servidor PT19
  - configuración rastreador Plaspy
  - configuración SMS PT19
  - configuración GPRS PT19
  - configuración plataforma rastreo PT19
---

# iStartek - Configuración PT19

Esta página documenta el contexto público de configuración para usar el rastreador GPS vestible iStartek PT19 con la plataforma Plaspy. Reúne los ajustes de servidor esenciales, orientaciones prácticas sobre el flujo de trabajo y los comandos SMS publicados que permiten apuntar un PT19 a Plaspy para seguimiento en tiempo real y reporte de eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El PT19 soporta configuración por SMS y por datos celulares; esta guía incluye ejemplos de comandos SMS publicados para el PT19 y explica cómo esos comandos se corresponden con los valores del servidor Plaspy.

## Resumen de la configuración

El objetivo de este proceso de configuración es preparar el PT19 para que envíe de forma confiable datos de ubicación y eventos a Plaspy y sea visible dentro de su cuenta Plaspy. Usando los comandos SMS públicos y los ajustes de servidor compartidos de Plaspy, puede configurar el dispositivo para que reporte en un temporizador regular, entregue eventos SOS y alarmas, y verificar los parámetros tras la configuración.

- Apuntar el PT19 al endpoint de servidor de Plaspy para que la telemetría llegue a la plataforma.
- Configurar el APN y parámetros GPRS del dispositivo para que el reloj pueda usar datos móviles.
- Ajustar el intervalo de reporte para equilibrar la inmediatez y la duración de la batería.
- Verificar parámetros y confirmar que el dispositivo es visible en Plaspy después de la configuración.
- Utilizar los comandos SMS publicados como un método sencillo y soportado por el fabricante para aplicar ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de comenzar

- Un dispositivo PT19 cargado con una tarjeta SIM funcional que tenga capacidad de datos o SMS y un plan móvil activo.
- Acceso a un teléfono o a un gateway SMS capaz de enviar comandos de configuración por SMS al dispositivo.
- El APN del operador, y opcionalmente usuario y contraseña del APN si su operador los requiere.
- Acceso a las instrucciones o herramientas oficiales de configuración de iStartek como referencia.
- Una cuenta Plaspy para confirmar que el dispositivo aparece y reporta después de la configuración.
- Conocimiento básico de si desea usar transporte UDP o TCP en el dispositivo en caso de que se solicite elegir.

## Cómo se conecta este rastreador a Plaspy

El PT19 se configura para enviar datos de ubicación y eventos a Plaspy transmitiendo telemetría desde el dispositivo a través de la red celular hacia el endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos mensajes, detecta el protocolo automáticamente y pone a disposición ubicación, alarmas e historial en la plataforma.

- El dispositivo se apunta a d.plaspy.com o directamente a 54.85.159.138 usando el puerto 8888.
- El PT19 puede usar UDP o TCP para el transporte de telemetría según las opciones de configuración del dispositivo.
- Las actualizaciones de ubicación y los reportes de eventos se envían según el temporizador configurado para aparecer en los mapas y registros de Plaspy.
- Los eventos SOS y de alarma se reenvían a Plaspy para manejo inmediato de notificaciones.
- Plaspy detecta automáticamente el protocolo del rastreador y acepta mensajes en el puerto compartido 8888 para todos los dispositivos soportados.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de iStartek, o prepárese para enviar comandos SMS según las instrucciones del PT19.
2. Configure el APN del dispositivo para que el PT19 pueda usar datos móviles si va a reportar mediante GPRS.
3. Introduzca el endpoint del servidor Plaspy indicando d.plaspy.com o 54.85.159.138 como dirección del servidor.
4. Establezca el puerto en 8888 y seleccione UDP o TCP para el transporte si el dispositivo requiere elegir.
5. Aplique o envíe la configuración al dispositivo y guarde los ajustes.
6. Reinicie el dispositivo si el fabricante lo requiere o si no se aplican los ajustes de inmediato.
7. Valide que el PT19 reporte a Plaspy revisando su cuenta Plaspy para ubicación en vivo, estado o mensajes de verificación de parámetros.

## Comandos de configuración de ejemplo

El PT19 soporta configuración vía SMS. Los siguientes comandos públicos son proporcionados por el fabricante para una configuración básica. Conserve los marcadores de posición exactamente como aparecen al reemplazarlos por los valores de su operador.

- Reinicio opcional a valores de fábrica (use solo si desea borrar configuraciones previas):
```
FACTORY#
```

- Establecer la zona horaria a UTC 0 (ejemplo):
```
GMT,E,0#
```

- Configurar el APN del operador. Reemplace [apn] por el APN de su operador. Si su operador exige usuario o contraseña del APN, incluya [apnu] y [apnp] donde el dispositivo lo soporte:
```
APN,[apn],[apnu],[apnp]#
```
(Si solo se requiere APN, envíe APN,[apn]#)

- Configurar el servidor GPRS usando el dominio de Plaspy (recomendado para la mayoría de instalaciones):
```
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS usando la IP del servidor Plaspy en lugar del dominio:
```
SERVER,0,54.85.159.138,8888#
```

- Establecer el temporizador de reporte del dispositivo para enviar actualizaciones cada 60 segundos:
```
TIMER,60#
```

- Verificar los parámetros actuales en el dispositivo:
```
PARAM#
```

Notas sobre los marcadores de posición:
- [apn] = cadena APN de su proveedor móvil
- [apnu] = usuario APN si se requiere
- [apnp] = contraseña APN si se requiere

Envíe estos comandos en el orden mostrado al seguir un flujo de configuración estándar: APN primero, luego SERVER, luego TIMER y finalmente PARAM# para verificar. Use FACTORY# únicamente cuando sea necesario un reinicio explícito.

## Observaciones sobre la configuración

- La configuración por SMS es un método publicado por el fabricante para el PT19; la entrega de SMS por parte del operador y el comportamiento del firmware del dispositivo pueden afectar la temporización y el éxito de los comandos.
- Las revisiones de firmware y las variantes de hardware pueden cambiar comandos disponibles o nombres de parámetros; siempre contraste con la documentación actual de iStartek.
- Elegir TCP frente a UDP afecta las características de entrega; Plaspy acepta ambos y detectará el protocolo automáticamente, pero elija el transporte que mejor coincida con la confiabilidad de su red local y el comportamiento del operador.
- Plaspy utiliza el mismo puerto 8888 para todos los rastreadores compatibles y detecta automáticamente el protocolo en el servidor.
- Después de la configuración, utilice PARAM# o el método de verificación del dispositivo para confirmar ajustes antes de la implementación final.

## Por qué usar Plaspy con esta configuración

Usar el PT19 con Plaspy ofrece a cuidadores, equipos de seguridad y operadores un camino directo hacia ubicación en tiempo real, alertas SOS e historial dentro de una sola plataforma. La forma vestible del PT19 y sus modos de posicionamiento complementan la ingesta de telemetría de Plaspy, de modo que los dispositivos reportan con fiabilidad y aparecen en el panel de Plaspy para monitoreo y respuesta a incidentes.

Para conocer más sobre Plaspy y ver las funcionalidades de la plataforma que complementan el seguimiento con PT19, visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware y detalles de hardware, verifique la información con el fabricante en https://istartek.com/.
