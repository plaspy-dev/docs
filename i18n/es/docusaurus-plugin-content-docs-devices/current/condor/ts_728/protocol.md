---
slug: /condor/ts_728/protocol
id: ts_728-protocol
sidebar_label: Protocol
title: Condor - TS-728 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para el rastreador marítimo Condor TS 728 y su comunicación con Plaspy vía satélite
keywords:
  - Condor TS 728
  - protocolo TS 728
  - protocolo GPS Condor
  - Condor TS 728 GPS
  - protocolo de rastreo TS 728
  - rastreador satelital Condor
  - rastreador Iridium Condor
  - compatibilidad rastreadores Plaspy
  - protocolo GPS marítimo
  - protocolo de seguimiento de embarcaciones
---

# Condor - Protocolo TS-728

Esta página documenta el contexto público del protocolo para usar el rastreador marítimo Condor TS-728 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a un nivel general, qué ajustes de conexión son públicos y qué aspectos de los reportes del rastreador son relevantes al integrar el monitoreo de embarcaciones por satélite en un flujo de trabajo de gestión de flotas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los detalles de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía describe las consideraciones públicas de conexión y compatibilidad en lugar de entrar en detalles internos de firmware.

## Resumen del protocolo

El protocolo que usa el TS-728 regula cómo se envían la posición, la telemetría y los eventos desde el rastreador a un servidor remoto. Para rastreadores satelitales como el TS-728, la comunicación está diseñada para entregar de forma confiable reportes compactos a través de la red Iridium hacia un endpoint central, de modo que Plaspy pueda mostrar mapas en vivo, alertas e histórico a los operadores.

- Transporta la ubicación y telemetría básica para que Plaspy muestre la posición y el estado de la embarcación en tiempo real.
- Incluye datos de identificación que permiten a Plaspy asociar los mensajes entrantes con el registro de dispositivo correcto.
- Transmite señales de eventos y alarmas que Plaspy puede mapear a alertas como movimiento, violaciones de geocerca o activaciones de sensores.
- Permite reportes periódicos para seguimiento regular además de mensajes opcionales por eventos para incidentes inmediatos.
- Se describe aquí deliberadamente a alto nivel para evitar exponer tramas específicas de firmware o implementaciones privadas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los rastreadores en un único endpoint y puerto compartidos y usa esa conexión para identificar los mensajes entrantes. Cuando un TS-728 está configurado para enviar datos a Plaspy, la plataforma determina automáticamente el protocolo del rastreador, por lo que normalmente no es necesario que usted seleccione el protocolo manualmente dentro de Plaspy.

- Plaspy escucha en un endpoint compartido accesible en d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo número de puerto para datos entrantes del rastreador, lo que simplifica la configuración del equipo.
- El TS-728 puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto compartido.
- Con los ajustes de reporte correctos en el dispositivo, Plaspy asociará los mensajes al registro del dispositivo automáticamente.
- En la mayoría de las instalaciones solo necesita apuntar el dispositivo al endpoint de Plaspy y confirmar el transporte y las credenciales si el fabricante las requiere.

## Transporte y configuración de conexión

Los rastreadores satelitales suelen soportar varios modos de transporte entre el equipo y la pasarela del servidor. Para enrutar los mensajes del TS-728 hacia Plaspy, los ajustes de transporte y destino son los elementos principales que deben configurarse en el dispositivo.

- El TS-728 puede configurarse para usar UDP o TCP en el puerto 8888, según la configuración del equipo y la pasarela satelital.
- Los dispositivos pueden apuntar al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 al configurar el destino de reporte.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, lo que reduce las diferencias de configuración por equipo.
- Elija UDP o TCP según la guía de instalación del rastreador y los compromisos entre confirmación de entrega y sobrecarga.
- Confirme la selección de transporte con el instalador del equipo o la documentación del fabricante para un uso satelital óptimo y consideraciones de costo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos de telemetría disponibles y los tipos de eventos opcionales; verifique la versión de firmware del TS-728 al diagnosticar diferencias.
- Las revisiones de hardware o módulos de interfaz opcionales pueden agregar o quitar entradas de sensores que afectan lo que el rastreador reporta a Plaspy.
- Las opciones de configuración del fabricante pueden alterar el modo de transporte, el destino del servidor y los intervalos de reporte; esto influye en cómo aparecen los datos en Plaspy.
- Algunas instalaciones reenvían flujos adicionales de sensores o datos BLE a través del rastreador; confirme si esas funciones están habilitadas en su versión específica del equipo.
- Para rastreadores satelitales, la frecuencia de reporte y el tamaño de los mensajes pueden estar limitados por las políticas de tiempo aire y los niveles de suscripción.
- Siempre valide ajustes clave como la dirección del servidor, la elección de transporte y el identificador del dispositivo antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del dispositivo ayuda a asegurar una configuración exitosa, una resolución de problemas eficiente y una operación predecible a largo plazo cuando el TS-728 se usa con Plaspy. Tener claridad sobre cómo se entregan los reportes facilita confirmar que el dispositivo está correctamente vinculado a la cuenta de Plaspy y que los eventos críticos se están recibiendo.

- Ayuda a confirmar que el rastreador está enviando al endpoint y transporte correctos de Plaspy.
- Simplifica la resolución de problemas cuando las actualizaciones de posición, las alertas o la telemetría no aparecen en Plaspy como se espera.
- Permite planificar mejor los intervalos de reporte y el uso de tiempo aire en transmisiones satelitales.
- Facilita a los instaladores adaptar la configuración del equipo a requisitos operativos como sensibilidad de geocercas o reporte por eventos.
- Da confianza a los gestores de flota de que cambios en el dispositivo, como actualizaciones de firmware o sustituciones de hardware, no romperán silenciosamente la entrega de datos.

## Por qué usar Plaspy con este protocolo

Usar el Condor TS-728 con Plaspy ofrece a las organizaciones visibilidad centralizada para embarcaciones que operan fuera de la cobertura celular. La combinación de conectividad satelital Iridium del TS-728 y la plataforma unificada de Plaspy permite reportes de posición globales, generación de alertas y flujos de trabajo consolidados para que los equipos en tierra puedan monitorear y responder a eventos a través de los océanos.

La detección automática de protocolos de Plaspy y los ajustes de conexión compartidos facilitan la integración de rastreadores satelitales como el TS-728 en configuraciones de monitoreo existentes. Para saber más sobre Plaspy y cómo soporta rastreadores marítimos y con conectividad satelital visite https://www.plaspy.com. Para los detalles específicos más actuales sobre el protocolo del dispositivo, comportamiento de firmware y guía de instalación, verifique la información con el fabricante en https://condorskyseeker.com/.
