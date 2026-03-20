---
slug: /atrack/al7/protocol
id: al7-protocol
sidebar_label: Protocol
title: ATrack - AL7 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para usar el ATrack AL7 con Plaspy para seguimiento de flotas y comunicación de dispositivos
keywords:
  - Protocolo ATrack AL7
  - Rastreador GPS AL7
  - ATrack AL7 Plaspy
  - Protocolo de rastreo AL7
  - Protocolo GPS ATrack
  - Seguimiento de flotas AL7
  - Rastreo vehicular AL7
  - Comunicación del rastreador
  - Compatibilidad AL7
  - Rastreo en tiempo real AL7
---

# ATrack - Protocolo AL7

Esta página ofrece información pública sobre el protocolo del rastreador GPS ATrack AL7 y su uso con la plataforma Plaspy. Resume cómo se comunica el AL7 en términos generales y cómo esos mensajes se mapean a los endpoints de red de Plaspy. El objetivo es ayudar a responsables de flota e integradores técnicos a comprender los conceptos básicos de la conexión sin exponer detalles privados del fabricante.

El AL7 es un rastreador económico y resistente con clasificación IP66, amplio rango de voltaje de operación, antena interna y opciones de reporte flexibles como SMS, TCP y UDP. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso es importante verificar la configuración del dispositivo y las notas de firmware al configurar el envío de datos a Plaspy.

## Resumen del protocolo

El protocolo de reporte del AL7 define cómo el dispositivo empaqueta y envía datos de posición, eventos y estado a un servidor remoto como Plaspy. En la práctica, el protocolo establece cómo el rastreador se identifica, reporta fijaciones GPS y eventos de sensores, y transmite registros en búfer tras reconexiones o ciclos de energía.

- Proporciona identificación e información de sesión para que Plaspy pueda asociar mensajes con un registro de dispositivo.
- Codifica posición GPS, marca de tiempo y estado básico de sensores para uso en tiempo real e histórico.
- Envía mensajes impulsados por eventos como movimiento, conducción brusca o violaciones de geocerca que Plaspy puede notificar a los usuarios.
- Soporta registro en búfer para entrega después de reconexiones, evitando pérdida de posiciones durante cortes temporales de cobertura.
- Opera sobre transportes de red estándar, de modo que el rastreador puede enviar datos a los endpoints de Plaspy o recurrir a SMS cuando esté disponible.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint compartido y reconoce automáticamente el protocolo del rastreador, por lo que la mayoría de los usuarios no necesita seleccionar un protocolo manualmente. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito principal para la detección automática.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto en escucha de Plaspy es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la capacidad y ajustes del equipo.
- Cuando un dispositivo reporta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador y asocia los mensajes entrantes con el perfil de dispositivo correcto.
- En la mayoría de los despliegues el usuario configura el rastreador para apuntar a d.plaspy.com (o a la IP 54.85.159.138) y Plaspy se encarga del resto.

## Transporte y contexto de conexión

Las elecciones de conexión y transporte afectan la confiabilidad, la latencia y la duración de la batería. El AL7 soporta modos de reporte TCP y UDP y puede configurarse para usar cualquiera de los transportes en el puerto de Plaspy según las necesidades del despliegue.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Los equipos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 cuando el DNS no esté disponible.
- Usar TCP ofrece garantías a nivel de sesión mientras que UDP puede reducir la sobrecarga y disminuir la latencia en algunas redes.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de firewalls y endpoints.
- Elija el transporte que coincida con los ajustes de firmware y el comportamiento de la red celular de su flota.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden modificar los mensajes soportados y los nombres de eventos; verifique el firmware instalado al solucionar problemas.
- Las variantes de hardware y SKU de la familia AL7 pueden incluir u omitir funcionalidades específicas como preferencias de roaming.
- El comportamiento celular y de roaming del AL7 puede diferir entre variantes de modelo por razones regionales o regulatorias del operador.
- La selección del transporte (TCP vs UDP) debe alinearse con la configuración del dispositivo y cualquier restricción de red o del operador.
- Valide la compatibilidad y las características disponibles con la documentación oficial de ATrack para su variante exacta del AL7.
- Si depende de registro en búfer o de funciones FOTA, confirme tanto los ajustes del servidor como los del dispositivo para esas capacidades.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del AL7 ayuda a asegurar reportes confiables, agilizar la resolución de problemas y prever el comportamiento de los dispositivos en toda la flota. Saber qué envía el rastreador y cómo lo recibe Plaspy reduce el tiempo de configuración y mejora la monitorización operativa.

- Ayuda a confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy durante la provisión inicial.
- Facilita la interpretación de la telemetría del dispositivo y la correlación de eventos con el comportamiento esperado en los paneles de Plaspy.
- Permite una depuración más eficiente cuando los mensajes se retrasan, faltan o llegan fuera de orden.
- Permite tomar decisiones informadas sobre transporte, gestión de energía y filtrado de eventos que afectan la duración de la batería.
- Permite planificar estrategias de actualización de firmware que concilien continuidad operativa y acceso a nuevas funciones.

## Por qué usar Plaspy con este protocolo

Usar el ATrack AL7 con Plaspy ofrece a las organizaciones una vía sencilla para obtener visibilidad en tiempo real y monitoreo basado en eventos, apoyándose en un endpoint de servidor consistente. El diseño robusto del AL7, su amplio rango de voltaje y sus opciones de reporte lo convierten en una solución práctica para flotas mixtas donde la resistencia y el bajo consumo son importantes.

El modelo de endpoint compartido de Plaspy simplifica el despliegue: apunte los dispositivos a d.plaspy.com o 54.85.159.138 en el puerto 8888, y Plaspy detectará automáticamente el protocolo del dispositivo e ingresará los datos. Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el protocolo específico del dispositivo, las notas de firmware y las diferencias entre variantes, consulte el sitio del fabricante https://www.atrack.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
