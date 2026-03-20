---
slug: /meitrack/mvt_100/protocol
id: mvt_100-protocol
sidebar_label: Protocol
title: Meitrack - MVT-100 Protocol
sidebar_class_name: menu_item_tracker
description: Guía concisa del protocolo del Meitrack MVT-100 y su comunicación con Plaspy
keywords:
  - Protocolo Meitrack MVT 100
  - Protocolo GPS Meitrack MVT 100
  - Meitrack MVT 100 Plaspy
  - Protocolo de rastreo MVT 100
  - Comunicación del rastreador Meitrack
  - Gestión de flotas MVT 100
  - Compatibilidad GPS Meitrack
  - Protocolo de rastreo de vehículos
  - Compatibilidad de dispositivos Plaspy
  - Integración Meitrack MVT 100
---

# Meitrack - Protocolo MVT-100

Esta página resume el contexto público del protocolo y ofrece orientación de conexión para usar el Meitrack MVT-100 con Plaspy. Se enfoca en cómo el rastreador se comunica en términos generales para que usted, como administrador de flota o integrador, pueda comprender qué configurar y qué esperar al reportar datos a Plaspy. Este documento es una referencia centrada en el protocolo, no un manual de dispositivo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el dispositivo informe al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto público y no sensible del protocolo sin detallar formatos privados de paquetes.

## Resumen del protocolo

El Meitrack MVT-100 envía ubicación, estado y alertas a un endpoint de servidor para que plataformas como Plaspy puedan ingerir y mostrar la telemetría del dispositivo. El rastreador combina su fijación GPS, estado de batería y modo de ahorro de energía, eventos del acelerómetro y entradas opcionales de conductor o accesorios en mensajes de protocolo que el servidor interpreta para ofrecer seguimiento en tiempo real, alertas e informes.

- Permite el envío de actualizaciones de posición GPS y marcas de tiempo al servidor para seguimiento en vivo y registros históricos
- Comunica el estado del dispositivo como nivel de batería, modo de ahorro y estado de carga para monitoreo operativo
- Reporta eventos del sensor de aceleración 3D, incluyendo vibraciones o alertas por remolque, para apoyar flujos de trabajo de seguridad
- Envía condiciones de alarma y alerta que activan notificaciones, disparadores de geocercas y reglas operativas en Plaspy
- Proporciona entradas de accesorios y eventos de identificación de conductor como interacciones con iButton para reportes de kilometraje y actividad del conductor

## Cómo detecta Plaspy el protocolo

Plaspy expone un endpoint compartido de ingestión que acepta conexiones de los rastreadores soportados e identifica automáticamente el protocolo empleado. En la mayoría de las implementaciones no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy y el firmware del equipo sigue el comportamiento de reporte de Meitrack.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com
- La IP pública del servidor de Plaspy es 54.85.159.138 y la plataforma escucha en el puerto 8888
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el modelo y el firmware
- Todos los dispositivos en Plaspy usan el mismo puerto y patrón de endpoint compartido, lo que simplifica la incorporación de dispositivos
- Cuando un dispositivo correctamente configurado se conecta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador y enruta los mensajes al gestor correspondiente

## Transporte y contexto de conexión

Las elecciones de conexión son clave para un reporte de dispositivo exitoso. El MVT-100 soporta transportes celulares comunes y puede configurarse para reportar por UDP o TCP según el firmware y las necesidades de despliegue. Conocer el endpoint y el método de transporte correctos ayuda a establecer conectividad fiable con Plaspy.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- Plaspy escucha en un único puerto compartido para todos los dispositivos, que es el 8888
- El MVT-100 normalmente puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración y el comportamiento del operador móvil
- La elección entre UDP y TCP puede influir en características de entrega de mensajes como retransmisión y orden
- Use los menús de configuración del dispositivo o las herramientas de aprovisionamiento para establecer la dirección de reporte y el transporte hacia el endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden modificar cómo se codifican ciertos eventos o qué campos se reportan; confirme las notas de la versión de firmware para comportamientos específicos del dispositivo
- Las revisiones de hardware y los accesorios opcionales pueden cambiar las entradas disponibles, como iButton u otros sensores adicionales
- Las configuraciones del lado del fabricante a veces ofrecen selección de transporte y opciones de dirección de servidor que deben coincidir con el endpoint y el puerto de Plaspy
- Algunas implementaciones usan nombres de dominio mientras otras usan la dirección IP directa; tanto d.plaspy.com como 54.85.159.138 son objetivos válidos de Plaspy
- Plaspy detecta el protocolo de forma automática, pero se requiere la configuración correcta del dispositivo y la conectividad de red para que la detección tenga éxito
- Valide siempre el soporte de funciones como reporte de eventos del acelerómetro, modos de batería e integración con Garmin según la documentación del dispositivo

## Por qué es importante comprender el protocolo

Conocer el protocolo de comunicación ayuda a que las flotas y los integradores configuren correctamente los dispositivos, interpreten la telemetría entrante y solucionen problemas de reporte cuando ocurran. Saber qué se espera que envíe el rastreador y cómo Plaspy ingiere esos datos reduce la fricción en la incorporación y mejora la confiabilidad a largo plazo.

- Asegura la dirección de servidor y los ajustes de transporte correctos para que el dispositivo pueda comunicarse con Plaspy
- Ayuda a interpretar qué mensajes del dispositivo corresponden a eventos como alertas por remolque o transiciones de ahorro de energía
- Facilita la resolución de problemas de conectividad al confirmar que el dispositivo apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Apoya la planificación de actualizaciones de firmware y cambios en funciones que afectan los campos reportados
- Reduce las falsas alarmas aclarando cómo se reportan y manejan los eventos del acelerómetro y las entradas de sensores

## Por qué usar Plaspy con este protocolo

Usar el Meitrack MVT-100 con Plaspy ofrece una forma práctica de convertir la telemetría del dispositivo en información operativa. El MVT-100 ofrece mayor autonomía en modos de ahorro de energía, sensor de aceleración 3D para alertas de seguridad, compatibilidad con dispositivos Garmin y funciones de plataforma como seguimiento en vivo, geocercas, registro GPS y reporte de kilometraje. Plaspy procesa estas corrientes de telemetría y las presenta para monitoreo de flotas, alertas e informes históricos.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para los detalles más actuales y específicos del protocolo del dispositivo, notas de firmware y orientación de implementación, verifique la información en el sitio oficial de Meitrack https://www.meitrack.com/ ya que el comportamiento del fabricante puede cambiar con el tiempo.
