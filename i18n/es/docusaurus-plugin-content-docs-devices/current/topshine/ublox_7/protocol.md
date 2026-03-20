---
slug: /topshine/ublox_7/protocol
id: ublox_7-protocol
sidebar_label: Protocol
title: TopShine - Ublox 7 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del TopShine Ublox 7 y su comunicación con Plaspy para rastreo y telemetría en tiempo real
keywords:
  - Protocolo TopShine Ublox 7
  - Protocolo GPS TopShine Ublox 7
  - Protocolo de comunicación TopShine Ublox 7
  - Protocolo Ublox 7 Plaspy
  - Rastreador GPS Ublox 7
  - Rastreador GPS TopShine
  - Rastreadores compatibles Plaspy
  - Protocolo de seguimiento de vehículos
  - Rastreador GPS para motocicleta
  - Protocolo de rastreo Ublox 7
---

# TopShine - Protocolo Ublox 7

Esta página ofrece contexto público sobre el protocolo utilizado por el rastreador TopShine Ublox 7 Mini y su integración con la plataforma Plaspy. Explica cómo el dispositivo reporta posición GNSS, telemetría y eventos de estado a Plaspy mediante transportes de red estándar y un protocolo de reporte abierto. El objetivo es ayudar a usuarios técnicos e integradores a comprender la relación de comunicación entre el Ublox 7 Mini y Plaspy sin exponer detalles sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Para la ingestión en Plaspy, el dominio del servidor es d.plaspy.com y la IP del servidor es 54.85.159.138 en el puerto 8888. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto de los mensajes puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El Ublox 7 Mini comunica posición, estado y alarmas a plataformas backend usando su protocolo de reporte abierto sobre GSM GPRS o SMS. En una implementación con Plaspy, la función del protocolo es entregar de forma confiable datos de ubicación y eventos para que Plaspy pueda mapear, registrar y alertar sobre la información.

- Transmitir soluciones GNSS y marcas de tiempo para que Plaspy coloque el dispositivo en mapas en vivo y en recorridos históricos.
- Reportar entradas digitales, eventos de encendido/apagado del motor y estados de accesorios para flujos de trabajo basados en ignición y telemetría.
- Enviar alarmas como exceso de velocidad, violaciones de geocerca y manipulaciones para alertas inmediatas en Plaspy.
- Proveer opciones de respaldo como SMS para reportes básicos y GPRS para actualizaciones continuas en tiempo real.
- Usar un protocolo abierto que permita a Plaspy interpretar campos de telemetría comunes sin requerir cambios en gateways propietarios.

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico entrante en un endpoint y puerto compartidos e identifica el protocolo del rastreador por el patrón de los datos y los campos reportados. Cuando usted configura el Ublox 7 Mini para reportar al endpoint de Plaspy, normalmente no será necesario seleccionar el protocolo manualmente en la plataforma.

- Plaspy escucha en el endpoint de ingestión compartido d.plaspy.com y en la IP 54.85.159.138 usando el puerto 8888.
- Los dispositivos pueden estar configurados para reportar por UDP o TCP al puerto 8888 según la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea campos comunes a la telemetría de la plataforma sin configuración adicional por parte del usuario.
- Una configuración adecuada del dispositivo para apuntar al endpoint de Plaspy asegura que la plataforma pueda ingerir los reportes de manera confiable.
- Si un dispositivo usa SMS como respaldo, Plaspy puede aceptar y reconciliar reportes basados en SMS junto con flujos GPRS cuando es compatible.

## Contexto de transporte y conexión

Las opciones de conexión determinan cómo el Ublox 7 Mini envía sus tramas de reporte a Plaspy. Las implementaciones típicas usan el enlace ascendente celular GPRS del dispositivo, con TCP o UDP como capa de transporte. Alternativamente, los dispositivos pueden usar SMS para reportes sencillos o como canal de respaldo.

- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 para reportes por GPRS.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP de ingestión de Plaspy 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles para simplificar la configuración y reducir errores.
- El enlace por SMS es compatible con el dispositivo para instalaciones ligeras o temporales y puede complementar el reporte por GPRS.
- La selección del transporte puede depender de las opciones de firmware del dispositivo, las condiciones de red y los requisitos de instalación.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos se reportan, los nombres de campos o elementos opcionales de telemetría en el protocolo del dispositivo.
- Las revisiones de hardware u opciones accesorias, como soporte para relé o micrófono, pueden introducir telemetría adicional o canales de control.
- Algunas instalaciones optan por UDP para menor sobrecarga y otras por TCP para mayor fiabilidad de conexión; confirme la configuración del dispositivo antes del despliegue.
- El comportamiento del reporte por SMS puede variar según el operador y el firmware del dispositivo y debe validarse si SMS forma parte del flujo de trabajo.
- Valide siempre la compatibilidad frente a los menús de configuración del dispositivo y la documentación del fabricante correspondiente a su versión de firmware.
- Confirme el registro del IMEI y la provisión de datos móviles al desplegar dispositivos para asegurar que el reporte por GPRS funcione correctamente.

## Por qué es importante entender el protocolo

Comprender cómo comunica el Ublox 7 Mini reduce la fricción de integración, acelera la resolución de problemas y mejora la fiabilidad operativa a largo plazo en Plaspy. Tener expectativas claras sobre transporte, campos reportados y comportamiento de respaldo facilita el diagnóstico y el diseño de alertas.

- Configuración más rápida al confirmar que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando el transporte elegido.
- Resolución de problemas más ágil al saber si una brecha de reporte se debe a la red, el transporte o el firmware.
- Mejor configuración de alarmas en Plaspy cuando usted conoce qué eventos reporta nativamente el dispositivo.
- Planeación de respaldo más inteligente al entender el comportamiento de SMS frente a GPRS para conectividad intermitente.
- Flujos de control remoto más previsibles cuando las capacidades del dispositivo, como el soporte de relé para inmovilizador, están confirmadas.

## Por qué usar Plaspy con este protocolo

Para organizaciones que necesitan rastreadores compactos para motocicletas, vehículos pequeños y equipos, el TopShine Ublox 7 Mini ofrece una combinación práctica de sensibilidad, robustez y un protocolo de reporte abierto que facilita la integración con Plaspy. Plaspy ingiere soluciones GNSS, eventos de estado y alarmas del dispositivo para ofrecer mapas en vivo, historial, alertas e informes que apoyan operaciones de flota y flujos de trabajo contra robo.

Si desea aprender más sobre cómo Plaspy funciona con rastreadores compatibles, visite https://www.plaspy.com para explorar las capacidades de la plataforma. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles más recientes del protocolo y del firmware del dispositivo en el sitio del fabricante https://www.gztopshine.com/ antes de tomar decisiones de despliegue.
