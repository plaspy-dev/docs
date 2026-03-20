---
slug: /coban/bn_103b/protocol
id: bn_103b-protocol
sidebar_label: Protocol
title: Coban - BN-103B Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo Coban BN-103B y cómo se comunica con Plaspy para reporte de ubicación y telemetría
keywords:
  - Protocolo Coban BN-103B
  - Protocolo GPS Coban BN-103B
  - Compatibilidad Coban BN-103B con Plaspy
  - Rastreador GPS BN-103B
  - Comunicación rastreador GPS
  - Protocolo de rastreo vehicular
  - Integración de dispositivos Plaspy
  - Protocolo de telemetría de flota
  - Protocolo de reporte de rastreador
  - Compatibilidad telemetría GNSS
---

# Coban - Protocolo BN-103B

Esta página documenta el contexto público del protocolo para usar el rastreador vehicular Coban BN-103B con Plaspy. Se centra en cómo el dispositivo normalmente reporta ubicación y eventos a Plaspy y qué aspectos del protocolo son relevantes para una integración exitosa. La intención es ofrecer orientación clara y no sensible sobre conectividad y consideraciones prácticas, no reproducir documentación del fabricante ni detalles privados del protocolo.

El BN-103B es compatible con Plaspy y soporta reportes por TCP, UDP y SMS, como se describe en la vista general del dispositivo. Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo cuando los equipos apuntan al punto de ingestión de Plaspy. Las configuraciones públicas de Plaspy incluyen el dominio del servidor d.plaspy.com y la IP 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy, y el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte del rastreador es el mecanismo que el BN-103B utiliza para identificarse y entregar posiciones GNSS, telemetría y eventos de alarma a un servidor como Plaspy. Para la integración con Plaspy, el protocolo permite que el dispositivo transmita actualizaciones periódicas de ubicación, mensajes basados en eventos y estados que la plataforma asigna a vehículos y activos.

- Permite al BN-103B enviar coordenadas GNSS, velocidad, rumbo y marca de tiempo a Plaspy.
- Transporta estados de alarma e entradas como SOS, puertas, impacto, exceso de velocidad, batería baja y desconexión de alimentación.
- Entrega indicadores de estado del dispositivo como encendido/ignición (ACC) y nivel de batería para monitoreo de viajes y salud del equipo.
- Admite tanto conexiones persistentes como reportes por datagramas según la configuración del equipo y las condiciones de red.
- Permite comandos de configuración remota y control cuando el dispositivo soporta canales de configuración y comandos desde la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint y puerto compartidos y utiliza detección automática para interpretar los mensajes entrantes de una amplia variedad de rastreadores. En la mayoría de los casos, una vez que el BN-103B está configurado para reportar a Plaspy, no se requiere seleccionar el protocolo manualmente dentro de la plataforma.

- Plaspy expone un único endpoint de ingestión accesible en d.plaspy.com o 54.85.159.138 y escucha en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, y la capa de ingestión de la plataforma realiza la identificación del protocolo en las conexiones entrantes.
- Los dispositivos pueden reportar vía TCP o UDP al endpoint de Plaspy; usar el transporte y endpoint correctos es el requisito principal de configuración.
- La detección automática permite que Plaspy asigne los mensajes entrantes al comportamiento de reporte del BN-103B cuando el equipo apunta al servidor de Plaspy.
- Normalmente, los usuarios solo necesitan asegurarse de que los ajustes de reporte del dispositivo coincidan con el endpoint y el modo de transporte de Plaspy; cambios avanzados se manejan a nivel del dispositivo o firmware.

## Contexto de transporte y conexión

La configuración de la conexión es una parte fundamental para una integración exitosa. El BN-103B soporta reportes por TCP, UDP y SMS, y la selección del transporte en la red afecta la confiabilidad, la latencia y la forma en que Plaspy recibe los mensajes. Mantenga la configuración de transporte y endpoint consistente con los requisitos de Plaspy durante el onboarding.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- El dominio público de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138; la plataforma escucha en el puerto 8888.
- Elegir TCP puede simplificar la entrega de mensajes en algunos entornos celulares, mientras que UDP resulta útil para reportes ligeros por datagramas cuando está soportado.
- El reporte por SMS puede estar disponible como canal alterno para dispositivos que lo soporten, pero el reporte por datos de red es la vía típica para telemetría en tiempo real en Plaspy.
- Asegúrese de que el APN y los ajustes del servidor de reporte en el rastreador coincidan con el endpoint y transporte de Plaspy para evitar problemas de conectividad.

## Notas sobre compatibilidad de protocolo

- Las revisiones de firmware en el BN-103B pueden modificar el tiempo de los mensajes, los campos soportados o el comportamiento de eventos; verifique la versión de firmware al investigar diferencias.
- Revisiones de hardware o accesorios opcionales pueden añadir o cambiar canales de telemetría, como sensores analógicos de combustible o micrófonos externos.
- Los comandos de configuración remota y las opciones de ajuste por parte del fabricante están sujetos al manual del BN-103B y pueden variar por región o firmware.
- La selección de transporte (TCP frente a UDP) debe coincidir con la configuración del dispositivo y el comportamiento de la red para obtener mejores resultados.
- La detección automática de protocolos de Plaspy reduce el mapeo manual, pero es esencial apuntar correctamente el destino de reporte y el transporte en el dispositivo.
- Siempre valide características críticas como control de inmovilizador o persistencia de alarmas con la documentación tanto de Plaspy como del dispositivo si depende de ellas operativamente.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el BN-103B ayuda a instaladores y administradores de flota a lograr un rastreo confiable, una resolución de problemas más rápida y una operación a largo plazo más estable con Plaspy. Saber qué canales transportan datos críticos y cómo cambia el comportamiento del dispositivo con el firmware facilita la integración.

- Simplifica la configuración inicial al asegurar que APN, dirección del servidor y transporte coincidan con las expectativas de Plaspy.
- Ayuda a diagnosticar problemas de conectividad al aislar factores de transporte de red, endpoint y configuración del equipo.
- Permite decisiones informadas sobre la elección de transporte según confiabilidad versus eficiencia de ancho de banda.
- Mejora el manejo de alarmas y el mapeo de eventos en Plaspy cuando sabe qué entradas generan qué mensajes.
- Ayuda en la planificación del ciclo de vida anticipando cambios de firmware o hardware que puedan afectar campos de telemetría o la cadencia de reporte.

## Por qué usar Plaspy con este protocolo

Usar el BN-103B con Plaspy ofrece a los operadores de flota un camino accesible hacia ubicación en tiempo real, alertas de eventos y agregación de telemetría sin requerir cambios de puerto por dispositivo ni selección manual de protocolo. El endpoint compartido y la detección automática de Plaspy agilizan el onboarding para dispositivos que reportan por TCP o UDP, ayudando a que los vehículos queden visibles y monitoreados rápidamente.

Para conocer más sobre cómo Plaspy soporta rastreadores GPS como el Coban BN-103B y revisar las capacidades de la plataforma, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica más reciente del dispositivo en el sitio del fabricante https://www.coban.net/.
