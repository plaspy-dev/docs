---
slug: /winrich/q50/configuration
id: q50-configuration
sidebar_label: Configuration
title: Winrich - Q50 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del reloj GPS Winrich Q50 y cómo apuntarlo al servidor de Plaspy
keywords:
  - configuración Winrich Q50
  - configuración Q50
  - Winrich Q50 Plaspy
  - configuración de servidor Q50
  - configuración de rastreador GPS Q50
  - comandos SMS Winrich Q50
  - configuración APN Q50
  - servidor GPRS Q50
  - configuración de rastreador GPS personal
  - configuración de rastreador de reloj
---

# Winrich - Configuración del Q50

Esta página documenta el contexto público de configuración para usar el reloj GPS Winrich Q50 con Plaspy. Resume los ajustes del servidor de Plaspy que debe aplicar, comprobaciones prácticas previas y ejemplos de comandos SMS publicados para el Q50, de modo que el dispositivo informe ubicación y eventos a Plaspy para supervisión en tiempo real e informes históricos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el servidor. Los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. En muchas instalaciones el Q50 se configura por SMS usando los comandos del fabricante que se muestran más abajo; adapte esos comandos conforme al firmware del dispositivo y al APN del operador.

## Resumen de la configuración

El proceso prepara un reloj Q50 para enviar sus mensajes de ubicación y alarma a Plaspy, de modo que los operadores puedan ver posiciones en vivo, recibir alertas SOS y de manipulación, y consultar el historial de eventos. Usando los comandos SMS públicos para el Q50 normalmente se configura la zona horaria, el APN y el servidor GPRS para que el reloj establezca la conexión de datos y reporte a Plaspy.

- Configure los ajustes de red del dispositivo para que el tráfico GPRS se dirija a Plaspy
- Establezca el APN del operador y los campos de usuario y contraseña de APN si son necesarios
- Apunte el rastreador al endpoint del servidor Plaspy y al puerto compartido usado por todos los dispositivos
- Valide la conectividad y el envío de reportes para que el dispositivo sea visible en Plaspy
- Use comandos de verificación para comprobar ajustes y estado en tiempo real

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un dispositivo Q50 cargado y capaz de recibir comandos SMS
- Una tarjeta SIM activa provisionada para datos y SMS según lo requiera el dispositivo
- Ajustes APN correctos para el operador móvil, incluyendo usuario y contraseña de APN si aplica
- Acceso al método oficial de configuración del fabricante o a la lista de comandos SMS
- Posibilidad de reiniciar o apagar y encender el dispositivo después de aplicar la configuración si es necesario
- Una cuenta en Plaspy y acceso a la plataforma para verificar que el dispositivo reporte correctamente

## Cómo se conecta este rastreador a Plaspy

El Q50 envía actualizaciones de ubicación, alarmas y mensajes de eventos a través de la red celular al endpoint y puerto del servidor Plaspy. Plaspy ingiere esos mensajes, detecta automáticamente el protocolo usado por el rastreador y muestra ubicaciones y alertas en la plataforma para que cuidadores y responsables puedan monitorear los dispositivos en tiempo real.

- El reloj se apunta al endpoint y puerto compartidos de Plaspy para que los mensajes lleguen de forma centralizada
- Las localizaciones (GPS y LBS) y las alarmas de eventos se transmiten por GPRS/celular a Plaspy
- Eventos SOS, reportes de manipulación y alertas de batería baja se reenvían a Plaspy para notificación
- Plaspy muestra posiciones en vivo y recorridos históricos una vez que el dispositivo informa con éxito
- El transporte puede configurarse en UDP o TCP; Plaspy detectará automáticamente el protocolo del rastreador

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o a la documentación del Q50 (lista de comandos SMS o herramienta del proveedor).
2. Asegúrese de que el dispositivo tenga una SIM funcional y las credenciales APN correctas del operador.
3. Introduzca el endpoint del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 según lo requiera la interfaz del dispositivo.
4. Configure el puerto en 8888 y, si el rastreador solicita seleccionar transporte, elija UDP o TCP.
5. Aplique o guarde la configuración en el dispositivo y envíe los SMS necesarios para confirmar los ajustes.
6. Reinicie o haga un ciclo de energía del dispositivo si las instrucciones del fabricante lo recomiendan.
7. Verifique que el dispositivo reporte a Plaspy y aparezca en la plataforma con las actualizaciones y alertas esperadas.

## Comandos de configuración de ejemplo

El Winrich Q50 puede configurarse por SMS usando los comandos del fabricante publicados para el modelo. Mantenga el orden al realizar una configuración inicial. Considere el reinicio de fábrica como opcional y úselo solo cuando sea necesario para aprovisionamiento inicial o resolución de problemas.

- Reinicio de fábrica inicial opcional
```text
940#
```

- Establecer la zona horaria a UTC 0
```text
801#W0#
```

- Configurar el APN del operador
```text
802#[apn]#[apnu]#[apnp]#
```
Nota: [apn] es el APN del operador. [apnu] y [apnp] son los campos opcionales de usuario y contraseña del APN si su operador los requiere. Si su APN no usa usuario ni contraseña, envíe marcadores vacíos según indique la documentación de su dispositivo.

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```text
803#54.85.159.138#8888#
```
Este comando configura el dispositivo para enviar reportes GPRS a la IP y puerto del servidor Plaspy. También puede usar el dominio d.plaspy.com si el dispositivo acepta nombres de host en lugar de direcciones IP.

- Ajustar el intervalo de reporte a 60 segundos
```text
730#60#
```

- Comprobar ajustes actuales
```text
886#
```

- Consultar el estado del dispositivo
```text
902#
```

Envíe los comandos SMS desde el número de administrador registrado como indica la documentación del Q50. Espere los mensajes de confirmación del dispositivo cuando corresponda antes de continuar con el siguiente paso.

## Notas de configuración

- Las revisiones de firmware y hardware pueden alterar el comportamiento de los comandos; confirme la sintaxis con el manual del Q50 correspondiente a su firmware.
- El Q50 soporta configuración por SMS como se muestra; el software del proveedor o herramientas de servicio pueden ofrecer una vía alternativa de gestión.
- La selección entre TCP y UDP depende de sus necesidades de instalación y del comportamiento de la red; Plaspy acepta ambos y realiza detección automática del protocolo.
- Tenga listas las credenciales APN y pruebe la conectividad en la red del operador móvil antes de apuntar a Plaspy.
- Use los comandos de verificación (886# y 902#) para confirmar ajustes y estado operativo después de aplicar cambios.

## Por qué usar Plaspy con esta configuración

Usar el Q50 con Plaspy brinda a cuidadores y organizaciones una forma sencilla de obtener visibilidad en tiempo real, alertas y seguimiento histórico para personas que requieren supervisión continua. Apuntar el dispositivo a Plaspy con los ajustes de servidor compartidos estandariza los reportes y permite un manejo consistente de eventos SOS, manipulación, geocercas y batería baja en la plataforma Plaspy.

Para obtener más información sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y orientación del fabricante sobre el Winrich Q50, verifique los detalles en el sitio oficial del fabricante http://www.winrichgroup.com/en/ ya que los pasos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
