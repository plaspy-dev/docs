---
slug: /condor/th_923/protocol
id: th_923-protocol
sidebar_label: Protocol
title: Condor - TH-923 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Condor TH 923 y cómo se comunica con Plaspy para seguimiento confiable
keywords:
  - Protocolo Condor TH 923
  - Protocolo GPS Condor TH 923
  - Compatibilidad Condor TH 923 Plaspy
  - Protocolo de comunicación Condor TH 923
  - Protocolo de rastreo TH 923
  - Conectividad híbrida TH 923
  - Integración de dispositivos Plaspy
  - Guía de protocolo para rastreadores GPS
  - Rastreo de flotas Condor TH 923
  - Rastreo marítimo TH 923
---

# Condor - Protocolo TH-923

Esta página ofrece contexto público sobre el protocolo para usar el rastreador Condor TH-923 con la plataforma Plaspy. Explica, a alto nivel, cómo el equipo se comunica con Plaspy, qué ajustes de conexión son habituales y qué considerar al configurar o solucionar reportes desde el TH-923. El objetivo es ayudar a usuarios técnicos y gestores de flota a comprender el papel de la comunicación sin exponer detalles privados de implementación.

El TH-923 es un dispositivo híbrido que usa redes celulares con conmutación automática a la red satelital Iridium, lo que permite entregar datos de ubicación y eventos a Plaspy en entornos urbanos y remotos. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Consulte siempre al fabricante para comportamientos específicos de firmware.

## Resumen del protocolo

A nivel conceptual, el protocolo de comunicación del TH-923 define cómo el rastreador se identifica, envía posición y estado, y entrega telemetría a un servidor remoto. El protocolo es el mecanismo que permite a Plaspy recibir fijaciones de ubicación, alertas y el estado del dispositivo para que las operaciones de flota estén informadas en tiempo real.

- Facilita la entrega de telemetría de ubicación y eventos desde el rastreador a Plaspy para mapeo, registros históricos y alertas.
- Transmite la identidad del dispositivo y las marcas de tiempo para que Plaspy pueda asociar mensajes con el activo correcto y su secuencia cronológica.
- Transporta campos de estado como encendido del motor, eventos de entrada y valores de sensores cuando el dispositivo los suministra.
- Admite la entrega bajo un modelo de conectividad híbrida donde la red celular es primaria y Iridium actúa como respaldo para un reporte continuo.
- Asegura que el dispositivo pueda enviar activaciones de geocercas y alertas por movimiento que se integren en las notificaciones y flujos de trabajo de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy. La detección ocurre en el borde de la plataforma, por lo que en general no es necesario seleccionar manualmente un protocolo en la interfaz de Plaspy cuando el TH-923 apunta al servidor correcto de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com que es el nombre de host recomendado para el reporte de dispositivos.
- La IP del servidor de Plaspy es 54.85.159.138 que puede usarse si DNS no está disponible durante la configuración.
- El puerto es 8888 y Plaspy utiliza este mismo puerto en todos los dispositivos compatibles.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que los mensajes llegan al endpoint y puerto compartidos.
- En la mayoría de las implementaciones, solo necesita configurar el TH-923 para que reporte al endpoint de Plaspy y la plataforma identificará el protocolo.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el TH-923 envía sus mensajes de protocolo a Plaspy más que la estructura interna de esos mensajes. El dispositivo soporta configuraciones de transporte híbrido para asegurar una entrega fiable desde rutas celulares o satelitales al endpoint de Plaspy.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según la preferencia del instalador y el soporte de firmware.
- Los equipos pueden apuntar a d.plaspy.com o a la dirección IP 54.85.159.138 como servidor de destino.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica los ajustes de servidor y reduce la variación de configuración entre flotas.
- La operación híbrida implica que el transporte activo puede alternar entre enlaces celulares e Iridium mientras sigue apuntando al mismo endpoint de Plaspy.
- Asegúrese de que los firewalls de red y las políticas APN del operador permitan conexiones salientes a d.plaspy.com o 54.85.159.138 en el puerto 8888 para un reporte confiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, nombres de campos o elementos opcionales de telemetría. Verifique el firmware que acompaña a su unidad.
- Las variantes de hardware o los paquetes con accesorios pueden exponer entradas o sensores distintos que afecten los campos de telemetría presentes.
- Las configuraciones del fabricante pueden permitir elegir TCP o UDP como transporte; confirme el transporte preferido para su despliegue.
- El comportamiento de conmutación a satélite lo implementa el dispositivo y puede afectar la frecuencia y el tamaño de los mensajes al operar sobre Iridium.
- Valide que el rastreador esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para asegurar que los mensajes lleguen a Plaspy.
- Consulte la documentación oficial de Condor sobre diferencias de firmware y funcionalidades antes de asumir paridad completa entre todas las unidades TH-923.

## Por qué importa entender el protocolo

Comprender cómo el TH-923 se comunica con Plaspy ayuda a garantizar una configuración sin contratiempos, operaciones confiables y una resolución de problemas eficaz cuando la telemetría o las alertas no aparecen como se espera. Tener claridad sobre el transporte y el comportamiento del protocolo reduce el tiempo dedicado a diagnosticar problemas de conectividad y mejora la fiabilidad a largo plazo de activos críticos.

- Ayuda a verificar que los ajustes de reporte del dispositivo apunten al endpoint y puerto correctos de Plaspy para que los datos lleguen a la plataforma.
- Facilita interpretar el comportamiento del dispositivo durante la conmutación de celular a satélite y ajustar intervalos de reporte o políticas de energía.
- Permite una solución de problemas más rápida de problemas de red o firewall confirmando transporte y detalles de destino.
- Apoya la planificación de integraciones que dependen de campos de telemetría específicos como ignición, movimiento o entradas de sensores.
- Aclara cuándo es necesario un cambio de configuración o una actualización de firmware por parte del fabricante para habilitar una funcionalidad deseada.

## Por qué usar Plaspy con este protocolo

Usar el Condor TH-923 con Plaspy ofrece a las organizaciones visibilidad persistente de activos de alto valor y en ubicaciones remotas combinando hardware de comunicaciones resistente con una plataforma que ingiere y muestra telemetría en tiempo real. El enlace celular primario y la copia de seguridad por Iridium del TH-923 ayudan a mantener la continuidad del rastreo, algo crítico para operaciones marítimas, logística de larga distancia y monitoreo de sitios remotos.

Si desea más información sobre cómo Plaspy trabaja con dispositivos como el TH-923 visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware e instrucciones de instalación más recientes consulte al fabricante en https://condorskyseeker.com/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo y deben verificarse contra la documentación oficial.
