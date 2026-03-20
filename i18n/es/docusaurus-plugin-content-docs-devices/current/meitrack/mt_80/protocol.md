---
slug: /meitrack/mt_80/protocol
id: mt_80-protocol
sidebar_label: Protocol
title: Meitrack - MT-80 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Meitrack MT 80 y cómo comunica posiciones, alertas y telemetría con Plaspy
keywords:
  - protocolo Meitrack MT 80
  - protocolo GPS Meitrack MT 80
  - compatibilidad MT 80 Plaspy
  - protocolo rastreador Meitrack
  - protocolo de rastreo MT 80
  - comunicación rastreador GPS Meitrack
  - protocolo GPRS MT 80
  - protocolo de dispositivo Meitrack
  - compatibilidad de dispositivos Plaspy
  - reporte de ubicación Meitrack
---

# Meitrack - Protocolo MT-80

Esta página presenta el contexto público del protocolo para usar el rastreador Meitrack MT-80 con Plaspy. Se enfoca en cómo el equipo se comunica en términos generales y en qué debe considerar al apuntar un MT-80 a Plaspy para el envío de posiciones, alertas y telemetría básica. El objetivo es ayudar a administradores e integradores a comprender el papel del protocolo del rastreador al trabajar con Plaspy sin exponer detalles sensibles de implementación.

El MT-80 es un rastreador personal compacto diseñado para niños, adultos mayores, trabajadores solitarios, activos y mascotas. Ofrece operación de bajo consumo, GNSS SiRF III, cuatribanda celular, acelerómetro integrado, registro local y varios métodos de reporte como SMS y GPRS usando el protocolo MEITRACK. Plaspy emplea un enfoque de conexión compartida entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo del MT-80 define cómo el rastreador se identifica, reporta posición y estado, y transmite alarmas y telemetría a un servidor remoto como Plaspy. En términos generales, este protocolo permite convertir los datos crudos del dispositivo en eventos y actualizaciones de ubicación útiles que Plaspy puede mostrar y almacenar.

- Proporciona identificación del dispositivo e información de sesión para que el servidor asocie los reportes con una unidad MT-80 específica.
- Codifica ubicación, marca de tiempo y campos de estado que Plaspy utiliza para mapeo y alertas.
- Transporta eventos de alarma como SOS, geovalla, batería baja y exceso de velocidad para acciones inmediatas.
- Soporta varios modos de reporte, incluyendo actualizaciones periódicas, reportes por distancia y consultas bajo demanda vía SMS o GPRS.
- Funciona sobre transporte IP móvil estándar para que el MT-80 pueda enviar datos a un endpoint de Plaspy para procesamiento en tiempo real.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes entrantes en un único endpoint y puerto compartidos y determina automáticamente el protocolo del dispositivo a partir del contexto de la conexión y del mensaje. Eso significa que cuando un MT-80 está configurado para reportar a Plaspy, normalmente no es necesario seleccionar el protocolo manualmente en la plataforma si el rastreador está correctamente apuntado al endpoint de Plaspy.

- Plaspy escucha en el endpoint unificado d.plaspy.com y en la IP pública 54.85.159.138 para los reportes de dispositivos.
- La plataforma utiliza el puerto 8888 para conexiones de dispositivos y todos los equipos soportados por Plaspy reportan a ese mismo puerto.
- Plaspy puede aceptar reportes enviados al endpoint de red sin requerir que los usuarios seleccionen un protocolo específico en la mayoría de los casos.
- Una configuración correcta del dispositivo (dirección del servidor, tipo de transporte e identificador del equipo) asegura que la plataforma pueda emparejar los mensajes entrantes con la unidad MT-80.
- Si el dispositivo utiliza fallback por SMS en lugar de GPRS, configure el equipo y la cuenta de Plaspy según sus necesidades operativas y las indicaciones del fabricante.

## Transporte y contexto de conexión

El MT-80 puede enviar reportes por datos móviles usando UDP o TCP según el soporte y la configuración del equipo. Al integrarlo con Plaspy, apunte el rastreador a la dirección del servidor de Plaspy y use el puerto de la plataforma para que el dispositivo establezca conexión y entregue las actualizaciones de ubicación de manera fiable.

- Los dispositivos pueden configurarse para enviar reportes GPRS a d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy acepta tanto transporte UDP como TCP en el puerto 8888; elija el transporte que soporte el equipo y que se adapte a las condiciones de la red.
- Todo el tráfico de dispositivos hacia Plaspy usa el mismo puerto 8888, lo que simplifica la configuración entre distintos modelos de rastreadores.
- Asegúrese de que el APN y los ajustes GPRS del MT-80 estén correctos para que pueda alcanzar el endpoint de Plaspy a través de la red móvil.
- Cuando esté disponible, confirme si el dispositivo preferirá SMS o GPRS para alarmas específicas o escenarios de conectividad limitada.

## Notas sobre compatibilidad del protocolo

- El MT-80 comúnmente reporta usando la familia de protocolos MEITRACK para SMS/GPRS, pero la disponibilidad de funciones puede depender de la versión de firmware instalada en la unidad.
- Revisiones de hardware o variantes regionales pueden cambiar qué tipos de mensaje o campos están presentes en los reportes.
- La elección entre UDP o TCP puede afectar el comportamiento de entrega en ciertos entornos de red; seleccione lo que el dispositivo y la red soporten.
- Los reportes por SMS y por GPRS se comportan de forma diferente y podrían requerir pasos de configuración separados en el equipo y en el servidor.
- La configuración compartida del servidor en Plaspy facilita la puesta en marcha, pero siempre valide el identificador del dispositivo y el intervalo de reporte para que coincidan con su política de rastreo.
- Para comandos específicos del equipo, alarmas o notas de firmware, consulte la documentación del fabricante para confirmar el comportamiento actual.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el MT-80 ayuda a garantizar una configuración exitosa, reportes confiables y una resolución de problemas más eficiente cuando use Plaspy. Entender el protocolo y las opciones de transporte reduce el tiempo de puesta en marcha y evita errores comunes que interrumpen actualizaciones de ubicación o la entrega de alarmas.

- Le permite configurar la dirección del servidor y el transporte correctos para que el MT-80 alcance a Plaspy.
- Facilita la interpretación del comportamiento del dispositivo, como reportes periódicos, eventos SOS o actualizaciones faltantes.
- Guía la resolución de problemas de conectividad revisando APN, selección de transporte y versiones de firmware.
- Apoya la planificación de mantenimiento a largo plazo al señalar dónde cambios de firmware o hardware podrían afectar la integración.
- Ayuda a diseñar intervalos de reporte y compensaciones de consumo de batería para operación en bajo consumo.

## Por qué usar Plaspy con este protocolo

Utilizar el Meitrack MT-80 con Plaspy brinda a organizaciones y cuidadores visibilidad de ubicación accesible, manejo de alarmas y registros históricos para activos pequeños y aplicaciones de seguridad personal. El procesamiento centralizado y el modelo de endpoint unificado de Plaspy facilitan recibir los reportes del MT-80 y convertirlos en información de rastreo accionable.

Si desea conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles de protocolo específicos del dispositivo, notas de firmware y la orientación del fabricante más recientes, verifique la información en el sitio oficial de Meitrack https://www.meitrack.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
