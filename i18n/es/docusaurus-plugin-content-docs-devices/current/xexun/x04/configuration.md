---
slug: /xexun/x04/configuration
id: x04-configuration
sidebar_label: Configuration
title: Xexun - X04 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Xexun X04 y apuntarlo a Plaspy para seguimiento en tiempo real y reportes
keywords:
  - Configuración Xexun X04
  - Instalación Xexun X04
  - Configuración rastreador Plaspy
  - Configuración GPS Xexun
  - Ajustes servidor X04
  - Configuración dispositivo Plaspy
  - Comandos SMS rastreador GPS
  - Ajustes APN Xexun X04
  - Configuración seguimiento vehicular
  - Configuración rastreo de activos
---

# Xexun - Configuración X04

Esta página documenta el contexto público de configuración para usar el rastreador Xexun X04 con Plaspy. Aquí se explican los ajustes del servidor Plaspy que deberá aplicar en el dispositivo y se resumen los pasos prácticos para que el rastreador informe a Plaspy, permitiendo visibilidad en tiempo real y reproducción histórica. Use esta guía junto con el manual del equipo y las herramientas del proveedor para la configuración final a nivel dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El modelo X04 soporta comandos de configuración por SMS en su documentación pública y los comandos que aparecen a continuación reflejan ese enfoque público basado en SMS.

## Visión general de la configuración

Este proceso prepara el X04 para enviar sus informes periódicos y mensajes de evento a Plaspy, de modo que el dispositivo aparezca en la plataforma para seguimiento y alertas. Los objetivos principales son apuntar el dispositivo al servidor Plaspy, asegurarse de que la conectividad de datos móviles esté configurada, establecer el intervalo de reporte y confirmar que el dispositivo reporte correctamente al servicio Plaspy.

- Configurar el APN y parámetros GPRS para que el dispositivo pueda acceder a la red de datos móviles.
- Apuntar el dispositivo al endpoint y puerto del servidor Plaspy usados por todos los dispositivos Plaspy.
- Seleccionar transporte UDP o TCP en el dispositivo si es necesario y establecer el intervalo de reporte.
- Enviar una prueba o esperar el primer reporte programado y validar el dispositivo en Plaspy.
- Conservar la contraseña por defecto del dispositivo o actualizarla según su política de seguridad.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para las conexiones entrantes
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto para las conexiones al servidor

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa con plan de datos y capacidad de SMS cuando el dispositivo lo requiera.
- Acceso a la alimentación del dispositivo y la posibilidad de recibir o enviar comandos SMS al rastreador.
- El método oficial de configuración Xexun o la documentación correspondiente a su firmware y región.
- Conocimiento del APN del operador y, opcionalmente, del usuario y contraseña APN de la SIM.
- Registro de la contraseña por defecto del dispositivo si necesita autenticar comandos SMS de configuración.
- Credenciales de cuenta Plaspy para verificar que el dispositivo aparece y reporta tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El X04 se configura para transmitir sus reportes programados y mensajes por eventos a través de la red celular al endpoint y puerto de Plaspy, de modo que Plaspy pueda mostrar posiciones en vivo, alertas e historial. Plaspy recibe el tráfico en el endpoint compartido y utiliza detección automática de protocolo para interpretar el protocolo del rastreador.

- El dispositivo envía reportes periódicos de ubicación al endpoint del servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Eventos como alarmas SOS, disparos de geocerca o batería baja se reenvían a Plaspy como mensajes inmediatos.
- Plaspy detecta automáticamente el protocolo del dispositivo para las conexiones entrantes y decodifica los mensajes para mostrarlos en la plataforma.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; el dispositivo debe configurarse en el transporte elegido mientras apunta al puerto 8888.
- Una vez establecido el reporte, el dispositivo se hace visible en Plaspy para seguimiento en vivo y reproducción histórica.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Xexun para su unidad, normalmente comandos SMS o herramientas del proveedor, y confirme la contraseña del dispositivo.
2. Ingrese el endpoint del servidor Plaspy en la configuración del dispositivo usando d.plaspy.com o 54.85.159.138 como dirección del servidor.
3. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere selección explícita.
5. Configure el APN y las credenciales APN necesarias para la conectividad de datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones o el equipo lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en la plataforma o esperando el reporte programado.

## Comandos de ejemplo para la configuración

La configuración pública del Xexun X04 permite comandos SMS para el ajuste. Los siguientes comandos son los comandos públicos documentados por SMS y mantienen el orden cuando tiene significado. Estos ejemplos usan la contraseña por defecto del dispositivo 123456. Si cambia la contraseña, reemplace 123456 por la contraseña activa del dispositivo.

- Reinicio inicial opcional de fábrica (usar solo si necesita restaurar valores por defecto):
```text
begin123456
```

- Configure el APN del operador móvil. Reemplace [apn] con la cadena APN de su operador:
```text
apn123456 [apn]
```

- Configure el usuario APN si su operador lo requiere. Reemplace [apnu] con el usuario APN:
```text
apnuser123456 [apnu]
```

- Configure la contraseña APN si es necesaria. Reemplace [apnp] con la contraseña APN:
```text
apnpasswd123456 [apnp]
```

- Establezca el endpoint del servidor GPRS a Plaspy usando la IP pública y el puerto indicados en la documentación de Plaspy:
```text
adminip123456 54.85.159.138 8888
```
Nota: El comando Xexun anterior usa la IP del servidor. Si su firmware permite especificar un nombre de dominio, puede ingresar d.plaspy.com en lugar de la IP cuando el dispositivo lo permita.

- Establezca el modo GPRS (el comportamiento y modos disponibles dependen del dispositivo):
```text
gprsmode123456
```

- Configure el intervalo de reporte periódico a 60 segundos:
```text
t060s***n123456
```

Explicación de los marcadores:
- [apn] es la cadena APN del operador móvil requerida para que el dispositivo use datos celulares.
- [apnu] es un usuario APN opcional cuando el operador exige autenticación.
- [apnp] es una contraseña APN opcional cuando el operador la exige.

Siga la guía del fabricante para el envío de comandos SMS y asegúrese de usar la contraseña correcta del dispositivo al emitir comandos.

## Notas de configuración

- La configuración por SMS está documentada públicamente para este modelo y se usa comúnmente para la configuración inicial y cambios remotos.
- Las versiones de firmware y las variantes regionales de hardware pueden cambiar la sintaxis de los comandos o las opciones soportadas; verifique la sintaxis para su firmware.
- Cuando el dispositivo requiera seleccionar el transporte, elija UDP o TCP en el dispositivo y asegúrese de que el puerto 8888 esté configurado en ambos casos.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolo, por lo que el servidor y el puerto son consistentes entre dispositivos.
- Mantenga segura la contraseña de su dispositivo y actualícela si su política de seguridad lo requiere después del aprovisionamiento inicial.

## Por qué usar Plaspy con esta configuración

Usar el Xexun X04 con Plaspy ofrece visibilidad centralizada de datos de ubicación y eventos para flotas, activos portátiles y casos de seguridad personal. La combinación de posicionamiento híbrido e informes celulares fiables convierte al X04 en una opción compacta para alimentar Plaspy con reportes programados, eventos SOS y alertas de geocerca para monitoreo, notificaciones y reproducción de rutas históricas.

Aprenda más sobre Plaspy en el sitio principal https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware y sintaxis de comandos, verifique siempre la información con el fabricante en https://www.xexun.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
