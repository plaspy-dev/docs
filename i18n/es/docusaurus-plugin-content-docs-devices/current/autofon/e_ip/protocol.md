---
slug: /autofon/e_ip/protocol
id: e_ip-protocol
sidebar_label: Protocol
title: AutoFon - E-Маяк IP Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar AutoFon E‑Маяк IP con Plaspy en rastreo y alertas
keywords:
  - protocolo AutoFon E-Маяк IP
  - protocolo GPS AutoFon E-Mayak IP
  - AutoFon E-Маяк IP Plaspy
  - protocolo de rastreo E-Mayak IP
  - comunicación rastreador AutoFon
  - rastreadores compatibles con Plaspy
  - rastreo vehicular E-Mayak IP
  - protocolo SMS E-Маяк IP
  - protocolo de rastreo a largo plazo
  - compatibilidad protocolo AutoFon
---

# AutoFon - Protocolo E‑Маяк IP

Esta página describe el contexto público del protocolo para usar el rastreador AutoFon E‑Маяк IP con Plaspy. Se centra en los puntos de integración y la comunicación de alto nivel que resultan útiles al configurar el equipo para reportar posición, alarmas y telemetría a la plataforma Plaspy, ya sea mediante reenvío de SMS o por informes IP cuando estén disponibles.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado correctamente para enviar datos al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece un contexto seguro y aplicable de forma amplia en lugar de detallar comandos específicos de firmware.

## Visión general del protocolo

El E‑Маяк IP transmite posición, eventos de alarma y telemetría a servidores remotos y números autorizados. Tanto si reenvía mensajes SMS como si activa el modo IP del dispositivo, el protocolo es el mecanismo que permite al rastreador identificarse, enviar datos útiles y mantener la conectividad con un servicio de monitoreo como Plaspy.

- Permite que el dispositivo informe coordenadas GPS, estados de alarma y telemetría básica a un endpoint central.
- Transporta notificaciones de eventos como botones SOS, alertas de movimiento/inclinación y detecciones de impacto/accidente.
- Incluye identidad y estado del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Admite mensajes de latido (heartbeat) o vigencia para que las plataformas detecten equipos sin conexión o con batería baja.
- Funciona junto al reenvío de SMS para redes o despliegues donde GPRS es limitado o no está configurado.

## Cómo Plaspy detecta el protocolo

Plaspy acepta los informes entrantes de los dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador con base en los datos recibidos. En la mayoría de los casos no será necesario seleccionar manualmente un protocolo en Plaspy si el dispositivo está configurado para enviar al endpoint de Plaspy.

- Plaspy escucha en el endpoint común d.plaspy.com y en la dirección IP del servidor 54.85.159.138.
- El puerto de Plaspy para el reporte de dispositivos es 8888 y es el mismo para todos los dispositivos soportados.
- Los equipos pueden configurarse para enviar sus mensajes de protocolo a d.plaspy.com o directamente a 54.85.159.138.
- Cuando llega un mensaje con formato adecuado a Plaspy, la plataforma lo asocia con el dispositivo correspondiente y presenta automáticamente la posición y los eventos.
- Para muchos usuarios, la configuración correcta del dispositivo a los endpoints de Plaspy elimina la necesidad de elegir un protocolo dentro de la plataforma.

## Transporte y contexto de conexión

El E‑Маяк IP ofrece métodos flexibles de reporte según la configuración y capacidades del firmware. Para el reporte IP hacia Plaspy, el equipo puede emplear transporte UDP o TCP para entregar mensajes al endpoint del servidor.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para mensajes del protocolo.
- Configure el rastreador para reportar a d.plaspy.com o a la dirección numérica 54.85.159.138 según los requisitos de su despliegue.
- Plaspy utiliza el mismo puerto (8888) para todos los equipos, lo que simplifica las reglas de firewall y la configuración de red.
- El reenvío de SMS sigue siendo una opción cuando GPRS no está habilitado o como canal complementario de reporte.
- La fiabilidad de la red y las restricciones del operador pueden influir en si UDP o TCP es más recomendable para su sitio.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar las funciones disponibles y el comportamiento de los mensajes; valide la compatibilidad con la revisión de firmware instalada.
- Las revisiones de hardware u opcionales pueden afectar los transportes soportados y los campos de telemetría disponibles.
- Las configuraciones del fabricante para el reporte (SMS vs GPRS) determinan si el equipo envía mensajes a Plaspy por reenvío de SMS o por reporte directo IP.
- La elección del transporte (UDP vs TCP) debe corresponder con la configuración del dispositivo y las restricciones de la red intermedia.
- Cuando se requieran detalles precisos del protocolo, consulte el manual del equipo y las indicaciones del fabricante para confirmar las opciones exactas de mensaje.
- La detección automática de Plaspy reduce fricciones, pero la configuración correcta del endpoint y el transporte en el dispositivo sigue siendo esencial.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el E‑Маяк IP ayuda a asegurar una configuración fiable, una resolución de problemas efectiva y una operación consistente a largo plazo en Plaspy. Tener claridad sobre las rutas de reporte y el comportamiento del protocolo acorta los tiempos de integración y aumenta la confianza operativa.

- Facilita confirmar que el dispositivo apunta al endpoint y transporte correctos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Permite interpretar con mayor facilidad la vigencia del equipo y la telemetría de batería/temperatura enviada a Plaspy.
- Agiliza el diagnóstico cuando las alarmas, los mensajes SOS o las alertas de movimiento no llegan como se espera.
- Orienta la decisión entre usar reenvío de SMS o reporte por protocolo GPRS según cobertura y restricciones de energía.
- Reduce errores de configuración al aclarar qué ajustes controlan el destino y el transporte de los reportes.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el AutoFon E‑Маяк IP ofrece una forma práctica de centralizar el reporte de posición, alarmas y telemetría para activos que requieren larga duración de batería y montaje discreto. Plaspy puede ingerir mensajes reenviados por SMS o informes por protocolo IP y mostrarlos en mapas, paneles y canales de alerta adecuados para monitoreo de flotas y activos.

Si desea conocer más sobre cómo Plaspy soporta la integración de rastreadores, visite https://www.plaspy.com para explorar las capacidades de la plataforma y las opciones de despliegue. También verifique el comportamiento más reciente del protocolo, el conjunto de funciones y notas de firmware con el fabricante en https://www.autofon.ru/ ya que el soporte e implementación del protocolo pueden cambiar con el tiempo.
