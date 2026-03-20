---
slug: /bofan/pt_30/protocol
id: pt_30-protocol
sidebar_label: Protocol
title: Bofan - PT-30 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Bofan PT-30 para seguimiento con Plaspy y guía general de compatibilidad
keywords:
  - Protocolo Bofan PT-30
  - Rastreador GPS Bofan PT 30
  - Protocolo de comunicación PT-30
  - Compatibilidad PT-30 Plaspy
  - Protocolo Bofan Plaspy
  - Protocolo de rastreo PT-30
  - Protocolo GPS Bofan
  - Protocolo para rastreador personal
  - Protocolo GPRS para rastreador GPS
  - Protocolo para rastreo de activos
---

# Bofan - Protocolo PT-30

Esta página describe el contexto público del protocolo para usar el rastreador personal Bofan PT-30 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica en términos generales, qué verificar durante la configuración y cómo Plaspy interoperabilidad con el PT-30 sin exponer detalles privados de implementación del fabricante.

El Bofan PT-30 es un rastreador GPS personal compacto que reporta ubicación vía SMS o GPRS e incluye funciones como alerta SOS, geovalla y comunicación bidireccional. Plaspy utiliza configuraciones compartidas de conexión para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Verifique el comportamiento específico del dispositivo en la documentación oficial de Bofan cuando sea necesario.

## Visión general del protocolo

El contexto del protocolo PT-30 se refiere a las reglas de reporte del dispositivo y los métodos de intercambio de mensajes que permiten que la posición, el estado y las alertas lleguen a un servidor como Plaspy. Para la integración, los aspectos públicos del protocolo determinan qué datos envía el rastreador y cómo el servidor reconoce y procesa esa información.

- Permite al rastreador enviar actualizaciones periódicas o por eventos de ubicación y reportes de estado a un endpoint remoto.
- Incluye información de identificación para que el servidor pueda asociar los datos entrantes con un dispositivo PT-30 concreto.
- Traduce la telemetría del dispositivo en eventos útiles de ubicación, alarmas y geovallas para la plataforma de seguimiento.
- Soporta comandos de configuración y control cuando el dispositivo está configurado para reportar por IP en lugar de SMS.
- Permite que la plataforma interprete señales de emergencia como SOS o alertas de batería baja en su contexto adecuado.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de muchos modelos de rastreadores y detecta automáticamente el protocolo de cada dispositivo cuando el rastreador está configurado para reportar al endpoint de Plaspy. En la mayoría de los casos, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo apunta al endpoint correcto de Plaspy.

- Plaspy usa el endpoint compartido d.plaspy.com como dominio principal para las conexiones de dispositivos.
- La dirección IP de la plataforma para el reporte de dispositivos es 54.85.159.138 y el puerto público de escucha es 8888.
- Plaspy detecta automáticamente el protocolo del rastreador para dispositivos que informan al endpoint y puerto compartidos.
- Normalmente los usuarios configuran el PT-30 para enviar datos GPRS al endpoint de Plaspy y la plataforma asocia los reportes entrantes con el perfil del dispositivo.
- Dado que la detección es automática, los ajustes incorrectos de APN y del destino de reporte en el rastreador son las razones más comunes por las que un dispositivo no es reconocido.

## Transporte y contexto de conexión

Los detalles de transporte describen cómo el PT-30 entrega sus datos a Plaspy a través de la red. El PT-30 soporta reporte vía GPRS y comúnmente utiliza transporte IP para comunicarse con plataformas de rastreo. Configurar correctamente el transporte y el destino es esencial para un reporte confiable.

- El PT-30 puede configurarse para usar transporte UDP o TCP para enviar datos a Plaspy en el puerto 8888 según la compatibilidad del dispositivo y la configuración del sitio.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 al configurar el rastreador.
- Plaspy escucha en el mismo puerto para todos los dispositivos, por lo que no necesita un puerto único por modelo de rastreador.
- Seleccione UDP o TCP en el equipo según las recomendaciones del operador y del firmware del dispositivo.
- Asegúrese de que el APN y los ajustes GPRS sean correctos para que el rastreador establezca una sesión IP y alcance el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes, los intervalos y los campos opcionales; valide el nivel de firmware del PT-30 al solucionar una integración.
- Diferentes revisiones de hardware o builds de firmware de Bofan pueden modificar los comandos disponibles o los ajustes de transporte por defecto.
- El PT-30 soporta reporte por SMS; para la integración con Plaspy, el método típico para seguimiento en tiempo real es el reporte por GPRS/IP al endpoint de Plaspy.
- La selección entre UDP y TCP en el dispositivo afecta las garantías de entrega y debe coincidir con la capacidad del equipo y las condiciones de red.
- Confirme siempre los detalles de configuración del dispositivo con la documentación del fabricante antes de hacer cambios irreversibles.
- En caso de duda, pruebe con un solo equipo para confirmar el reporte antes de desplegar una implementación a mayor escala.

## Por qué es importante conocer el protocolo

Comprender cómo se comunica el PT-30 ayuda a asegurar una configuración fluida, un seguimiento confiable y una resolución más rápida de problemas cuando los dispositivos no aparecen en Plaspy. Conocer los aspectos públicos del protocolo mejora la precisión en la configuración y el tiempo de actividad operativo.

- Ayuda a verificar que el rastreador apunta al endpoint correcto de Plaspy y usa el transporte apropiado.
- Facilita la interpretación de señales como SOS, alertas de geovalla y reportes de batería baja cuando llegan a la plataforma.
- Reduce el tiempo dedicado a problemas comunes relacionados con APN, selección de transporte y comportamiento específico del firmware.
- Apoya la planificación de despliegues a escala al clarificar las capacidades del dispositivo y los intervalos de reporte.
- Mejora la comunicación con el fabricante cuando necesite diagnósticos específicos del dispositivo o actualizaciones de firmware.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el Bofan PT-30 ofrece una forma directa de centralizar ubicación, alertas y reportes de estado de rastreadores personales en una sola plataforma de monitoreo. Para organizaciones que requieren rastreo discreto y portátil de personas o activos, Plaspy ayuda a traducir los reportes del PT-30 en datos de ubicación y alerta accionables sin necesidad de seleccionar manualmente el protocolo.

Si desea obtener más información sobre Plaspy y cómo funciona con dispositivos como el Bofan PT-30, visite https://www.plaspy.com. Para los detalles más actuales sobre el protocolo específico del dispositivo, comportamiento de firmware y notas de implementación, verifique la información en el sitio del fabricante https://www.bofancloud.com/ ya que los detalles pueden cambiar con el tiempo.
