---
slug: /reachfar/rf_v03_obd/protocol
id: rf_v03_obd-protocol
sidebar_label: Protocol
title: Reachfar - RF-V03-OBD Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del tracker Reachfar RF-V03-OBDII y su comunicación con Plaspy
keywords:
  - Protocolo Reachfar RF-V03-OBD
  - GPS Reachfar RF-V03-OBD
  - RF-V03-OBD Plaspy
  - tracker OBDII Reachfar
  - protocolo tracker OBDII
  - protocolo rastreo vehicular Reachfar
  - protocolo dispositivo Plaspy
  - rastreo de flotas Reachfar
  - protocolo telemática OBD
  - compatibilidad RF-V03-OBD
---

# Reachfar - Protocolo RF-V03-OBD

Esta página ofrece contexto público sobre el protocolo para usar el tracker Reachfar RF-V03-OBD con Plaspy. Explica a alto nivel cómo se comunica el dispositivo, qué espera Plaspy de los trackers que reportan y qué ajustes de conexión emplean los servidores de Plaspy para recibir datos. La información aquí está pensada para que gestores de flotas e integradores comprendan el papel del protocolo sin exponer detalles internos del fabricante.

El RF-V03-OBD es un rastreador OBDII plug-and-play que se conecta al puerto J1962 del vehículo para enviar posición GPS, estado de ignición ACC, diagnósticos OBD básicos y eventos de alarma. Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que valide el comportamiento del equipo con la documentación oficial de Reachfar cuando sea necesario.

## Visión general del protocolo

A un nivel público y general, el protocolo del tracker es el método que utiliza el RF-V03-OBD para entregar telemetría y eventos a un servidor remoto para que Plaspy pueda mostrar mapas en vivo, alertas e historial. El protocolo abarca información de identidad y sesión, actualizaciones de posición y movimiento, y reporte de eventos como cambios de ACC, disparos de geocerca y alarmas por vibración. Esta página no documenta formatos privados de paquetes ni tramas específicas del fabricante, sino que se concentra en el rol comunicacional del protocolo en un despliegue con Plaspy.

- Permite que el tracker se identifique y establezca una sesión de reporte con Plaspy para asociar ubicación y telemetría OBD al vehículo correcto.
- Transporta posiciones GPS, estado de ignición ACC, valores diagnósticos OBD cuando están disponibles, y eventos de alarma al backend para seguimiento en tiempo real y reproducción histórica.
- Proporciona una vía confiable para sincronizar almacenamiento en zonas sin cobertura cuando el tracker recupera conectividad y carga los registros en buffer.
- Soporta reportes impulsados por eventos para alarmas y disparos de geocerca, de modo que Plaspy pueda generar notificaciones oportunas.
- Permite que el dispositivo use variantes celulares distintas para cobertura regional manteniendo un destino de reporte consistente para Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los datos de los trackers en un endpoint y puerto unificado y utiliza detección automática para determinar cómo deben interpretarse las conexiones entrantes. Cuando un Reachfar RF-V03-OBD está configurado para reportar al endpoint de Plaspy, la plataforma asociará los datos entrantes con un dispositivo y protocolo conocidos sin que el usuario deba seleccionar manualmente el protocolo en la mayoría de los casos.

- Plaspy escucha los reportes de dispositivos en el endpoint público d.plaspy.com y en la IP del servidor 54.85.159.138 en el puerto compartido 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y evita diferencias de puerto por dispositivo.
- Plaspy detecta automáticamente el protocolo del tracker cuando un equipo correctamente configurado reporta al endpoint, reduciendo pasos de configuración manual.
- En instalaciones típicas el usuario configura el APN del dispositivo y el destino de reporte y el equipo comienza a enviar telemetría al endpoint de Plaspy.
- Si un dispositivo no se conecta o no reporta, verifique el APN, el host de reporte y los ajustes de transporte antes de abrir un ticket de soporte.

## Contexto de transporte y conexión

El RF-V03-OBD puede configurarse para usar UDP o TCP para el reporte, según el firmware y la variante del dispositivo. Plaspy soporta ambas opciones de transporte en el puerto compartido para que los instaladores elijan el tipo de conexión que coincida con la capacidad del tracker y las condiciones de la red.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy acepta conexiones UDP y TCP en el puerto 8888, y muchas unidades RF-V03-OBD pueden ajustarse para usar cualquiera de los dos transportes.
- Usar UDP puede reducir la sobrecarga de conexión en algunas redes, mientras que TCP ofrece una sesión orientada a conexión para equipos que lo requieran.
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos soportados, la configuración normalmente solo requiere establecer el host y el transporte correctos en el tracker.
- Asegúrese de que los ajustes APN del operador y cualquier regla de firewall permitan tráfico saliente hacia d.plaspy.com en el puerto 8888 desde los módems vehiculares.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos de telemetría se reportan y con qué frecuencia; compare siempre el comportamiento con las notas de la versión del firmware del equipo.
- Las variantes de hardware y las categorías celulares como CAT1, CAT4 y CAT-M1/NB2 pueden influir en la conectividad regional y en la disponibilidad de funciones.
- La monitorización de voz, soporte para sensores BLE y ciertas opciones de diagnóstico pueden estar presentes solo en variantes concretas del RF-V03-OBD; confirme la disponibilidad de funciones para su modelo.
- La selección de transporte (UDP vs TCP) puede estar limitada por el firmware del dispositivo o por el comportamiento de la red del operador; elija el transporte recomendado para su variante.
- Los ajustes del fabricante, como el APN por defecto o los intervalos de reporte, pueden variar entre lotes; valide estos valores durante las pruebas de despliegue.
- Valide las integraciones críticas realizando pruebas en vivo para alertas, detección de ACC y sincronización de almacenamiento en zonas sin cobertura antes de implementar a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo del tracker ayuda a asegurar una incorporación exitosa de dispositivos, una interpretación precisa de la telemetría y una resolución de problemas eficaz cuando los equipos no reportan como se espera. Tener una comprensión práctica del modelo de comunicación reduce fricción en el despliegue y contribuye a la confiabilidad de la flota a largo plazo.

- Confirma que el dispositivo está apuntando al endpoint y transporte de Plaspy correctos para que los datos aparezcan en la cuenta adecuada.
- Ayuda a interpretar por qué ciertos elementos de telemetría pueden faltar debido a límites de firmware o conjuntos de funciones de la variante.
- Simplifica la resolución de problemas al acotar las comprobaciones a APN, host, transporte y firmware del dispositivo cuando el reporte falla.
- Apoya la planificación operacional en torno al almacenamiento en zonas sin cobertura y el comportamiento de carga para áreas con cobertura celular intermitente.
- Orienta las decisiones sobre actualizaciones de firmware y selección de variantes cuando se requieren capacidades telemáticas específicas.

## Por qué usar Plaspy con este protocolo

Usar el Reachfar RF-V03-OBD con Plaspy ofrece a las organizaciones una forma rápida de añadir telemetría basada en OBDII a un flujo de gestión de flotas ya existente. La naturaleza plug-and-play del RF-V03-OBD combinada con el reporte centralizado de Plaspy permite un despliegue ágil, monitoreo en vivo de ubicación y estado de ignición, y reproducción histórica para recuperación y análisis. Para operadores que requieren instalación no invasiva y reportes sencillos, esta combinación soporta operaciones rutinarias de flotas, respuesta ante robo y monitoreo del comportamiento del conductor.

Para obtener más información sobre Plaspy y cómo maneja el reporte de dispositivos y las funciones de flota visite https://www.plaspy.com. Para detalles específicos de protocolo del dispositivo, notas de firmware y documentación de variantes verifique la información con el fabricante en https://www.reachfargps.com/ ya que el soporte del protocolo y el comportamiento de firmware pueden cambiar con el tiempo.
