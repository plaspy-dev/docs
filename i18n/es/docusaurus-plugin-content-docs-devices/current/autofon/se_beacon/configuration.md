---
slug: /autofon/se_beacon/configuration
id: se_beacon-configuration
sidebar_label: Configuration
title: AutoFon - SE+ Beacon Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon SE+ Beacon para enviar datos a Plaspy por GPRS y SMS
keywords:
  - configuración AutoFon SE+ Beacon
  - instalación AutoFon SE+ Beacon
  - AutoFon SE+ Beacon Plaspy
  - configuración de servidor AutoFon SE+ Beacon
  - configuración GPS SE+ Beacon
  - configuración GPRS SE+ Beacon
  - compatibilidad AutoFon con Plaspy
  - rastreo vehicular SE+ Beacon
  - rastreo de activos SE+ Beacon
  - configuración de rastreador Plaspy
---

# AutoFon - Configuración del SE+ Beacon

Esta página explica el contexto público de configuración para usar el rastreador AutoFon SE+ Beacon con Plaspy. Resume los ajustes de servidor prácticos y los pasos habituales para dejar el SE+ Beacon listo para enviar ubicaciones y telemetría de eventos a la plataforma Plaspy. El contenido se basa en la descripción pública del SE+ Beacon y se centra en los valores específicos de Plaspy que usted deberá ingresar al configurar el equipo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto de Plaspy se usan para todos los rastreadores compatibles. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione AutoFon. Compare siempre estas notas con la documentación oficial del dispositivo y del firmware que tenga instalado.

## Resumen de la configuración

Este proceso prepara el SE+ Beacon para enviar posiciones GNSS y alertas de eventos a Plaspy, apuntando el dispositivo al endpoint unificado de Plaspy y asegurando que el equipo pueda establecer conexión GPRS para reporte en tiempo real, con SMS como respaldo configurado.

- Ingrese los datos del servidor Plaspy para que el SE+ Beacon pueda enviar paquetes GPRS a Plaspy para seguimiento en vivo y reporte de eventos.
- Seleccione el método de transporte (UDP o TCP) si el dispositivo solicita una elección durante la configuración.
- Configure y confirme los intervalos de latido o señales de vida para que el dispositivo mantenga presencia en los paneles de Plaspy.
- Valide que la opción de respaldo por SMS y el número del propietario estén correctos para alertas cuando no haya datos GPRS.
- Pruebe la conectividad y confirme que la telemetría y los eventos sean visibles en Plaspy después de que el dispositivo reporte.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: supports UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when packets arrive to the shared endpoint

Nota: Plaspy usa el mismo puerto para todos los dispositivos soportados y realiza detección automática de protocolo, por lo que el endpoint y el puerto son consistentes entre rastreadores compatibles.

## Requisitos típicos antes de la configuración

- Alimentación y batería: asegúrese de que el SE+ Beacon tenga carga suficiente o alimentación externa conectada para la configuración y las pruebas.
- SIM activa con plan de datos y GPRS habilitado para reporte en tiempo real, y servicio SMS disponible como respaldo.
- Identificador del dispositivo disponible, como el IMEI, para registrar e identificar el rastreador en su cuenta o inventario de Plaspy.
- Acceso al método o software de configuración oficial de AutoFon compatible con su versión de firmware.
- Cobertura de red en la ubicación de prueba para permitir el registro GPRS y la entrega inicial de paquetes.
- Opcional: PC, adaptador USB o herramienta de configuración AutoFon si el dispositivo requiere conexión por cable o configuración vía software.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el SE+ Beacon envía posición GNSS y telemetría de eventos al endpoint y puerto compartidos de Plaspy a través de GPRS, mientras que el SMS puede funcionar como canal de respaldo para alertas o reportes alternativos. El comportamiento de buffer y de los latidos del dispositivo ayuda a conservar y reenviar datos cuando se restablece la conectividad.

- La ruta principal de datos es GPRS hacia el servidor de Plaspy en d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; seleccione el que su firmware soporte.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan paquetes al puerto compartido, por lo que no es necesario seleccionar el protocolo manualmente en la plataforma.
- El reporte de eventos como movimiento, inclinación, impacto y SOS se reenvía a Plaspy para alertas y visualización en el panel.
- Los mensajes de latido o señal de vida mantienen el dispositivo visible en Plaspy y facilitan la detección de condiciones sin conexión.
- El buffer tipo black box del dispositivo almacena paquetes no enviados para cargarlos a Plaspy cuando se recupere la conectividad.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de AutoFon o al software recomendado para el SE+ Beacon y la versión de firmware instalada.
2. Ubique la sección de configuración de servidor o APN e ingrese el dominio de servidor d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo solicita elección durante la configuración.
5. Configure los intervalos de latido o señal de vida y confirme los ajustes de número del propietario o respaldo por SMS según sea necesario.
6. Aplique o guarde la configuración en el equipo usando la herramienta del fabricante o los comandos SMS provistos por AutoFon.
7. Reinicie el dispositivo si el firmware lo requiere para aplicar los nuevos ajustes de red.
8. Valide la conectividad confirmando que el dispositivo reporte a Plaspy y revisando los mensajes de posición y eventos en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y el método para configurar el SE+ Beacon dependen del firmware de AutoFon y de las herramientas del fabricante. Los dispositivos AutoFon suelen ofrecer configuración vía herramienta de PC, adaptador USB o cadenas de configuración por SMS. Debido a las diferencias entre modelos y firmware, siga las instrucciones del fabricante para la sintaxis correcta de los comandos y el orden de ejecución. En todos los casos, los valores de Plaspy a utilizar son d.plaspy.com o 54.85.159.138 y el puerto 8888, con UDP o TCP seleccionado si es necesario.

Si dispone de comandos SMS proporcionados por el fabricante o de un script de configuración de AutoFon, aplíquelos en el orden que el fabricante indique y reemplace los campos de host y puerto del servidor con los ajustes de Plaspy indicados arriba.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús y la ubicación exacta de los campos de servidor en la herramienta de configuración de AutoFon.
- Si el equipo ofrece tanto UDP como TCP, pruebe la opción de transporte que mejor funcione con su operador móvil y las condiciones de red; Plaspy soporta ambas.
- Use ajustes de respaldo por SMS para alertas críticas cuando sea posible; el SMS puede proporcionar notificaciones simples cuando GPRS no esté disponible.
- Confirme que la configuración APN sea la correcta para la tarjeta SIM antes de intentar enviar paquetes GPRS a Plaspy.
- Mantenga a mano la documentación del fabricante para comandos SMS específicos del modelo, procedimientos de reinicio e instrucciones de actualización de firmware.

## Por qué usar Plaspy con esta configuración

Configurar el AutoFon SE+ Beacon para reportar a Plaspy brinda a las organizaciones visibilidad confiable en despliegues de rastreo encubierto o de larga duración. La ruta principal por GPRS y el respaldo por SMS del SE+ Beacon, junto con mensajes de latido configurables y un amplio buffer offline, ayudan a garantizar que la información de posición y eventos llegue a Plaspy para monitoreo en vivo, reproducciones históricas y workflows de alertas.

Para más información sobre cómo Plaspy soporta rastreo de flotas y activos con ajustes de servidor unificados, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y guías de instalación del AutoFon SE+ Beacon consulte la documentación oficial del fabricante en https://www.autofon.ru/ ya que el comportamiento y los procedimientos de configuración del dispositivo pueden cambiar con el tiempo.
