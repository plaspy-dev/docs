---
slug: /ulbotech/t370/protocol
id: t370-protocol
sidebar_label: Protocol
title: Ulbotech - T370 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo del Ulbotech T370 y cómo se comunica con Plaspy usando ajustes de conexión compartidos
keywords:
  - Protocolo Ulbotech T370
  - Protocolo GPS Ulbotech T370
  - Ulbotech T370 Plaspy
  - Protocolo de rastreo T370
  - Protocolo de rastreador GPS OBD
  - Protocolo de rastreador vehicular
  - Compatibilidad rastreador GPS Plaspy
  - Seguimiento u‑blox MAX‑7
  - Conectividad Telit xE910
  - Protocolo GPS para gestión de flotas
---

# Ulbotech - Protocolo T370

Esta página describe el contexto público del protocolo para usar el rastreador OBD Ulbotech T370 con Plaspy. Se enfoca en los aspectos de comunicación y conexión relevantes para la integración, explicando cómo el dispositivo reporta ubicación, telemetría y datos OBD a un endpoint de Plaspy sin entrar en detalles privados o de implementación específicos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante; por eso esta página describe el contexto general de comunicación y consideraciones prácticas para una configuración exitosa con Plaspy.

## Resumen del protocolo

El T370 emplea un estilo estándar de reporte sobre redes celulares para enviar fijaciones GNSS, eventos de movimiento, parámetros OBD y estado del dispositivo a un servidor remoto. Su función en el protocolo es identificar de manera confiable el dispositivo, transmitir ubicación y telemetría en tiempo adecuado, y permitir que Plaspy consuma esos mensajes para paneles, alertas e informes.

- Proporciona reportes periódicos y basados en eventos de ubicación y telemetría que Plaspy utiliza para seguimiento y análisis.
- Incluye campos de identificación y estado del dispositivo para que Plaspy pueda asignar los mensajes entrantes al vehículo y registro de dispositivo correctos.
- Transmite parámetros obtenidos por OBD cuando están disponibles para enriquecer el estado del vehículo, consumo de combustible o flujos de diagnóstico en Plaspy.
- Soporta reportes de acelerómetro y eventos de movimiento para casos de uso como análisis de conducta del conductor y detección de choques.
- Habilita señales de gestión remota como actualizaciones de estado y salidas que pueden incorporarse a flujos de trabajo en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint compartido y en un puerto para los reportes entrantes de dispositivos y utiliza rutinas de detección establecidas para identificar el protocolo del rastreador de forma automática. Cuando el T370 está configurado para reportar a Plaspy, la plataforma normalmente reconoce el dispositivo sin que sea necesario seleccionar manualmente el protocolo en la interfaz.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP conocida del servidor es 54.85.159.138.
- El puerto de reporte común usado por todos los dispositivos en Plaspy es 8888 y Plaspy usa el mismo puerto para los rastreadores soportados.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan mensajes al endpoint y puerto compartidos.
- Normalmente los usuarios no necesitan seleccionar un protocolo manualmente dentro de Plaspy si el dispositivo apunta al endpoint de Plaspy y está correctamente configurado.
- La identificación correcta del dispositivo en los primeros reportes agiliza el análisis automático y la asignación en Plaspy.

## Transporte y contexto de conexión

El T370 soporta opciones de transporte celular comúnmente usadas y puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto compartido de Plaspy. La elección de la conexión suele depender de la configuración del dispositivo, las capacidades del firmware y el entorno de la red móvil.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de la red.
- El T370 puede apuntar al dominio del servidor d.plaspy.com o a la IP 54.85.159.138 para reportes.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el número de puerto no necesita variar entre distintos modelos de rastreadores.
- La selección de transporte puede afectar la semántica de entrega, pero no cambia la detección automática del protocolo por parte de Plaspy.
- Asegúrese de que el APN y la configuración de la SIM estén provisionados correctamente para que el dispositivo pueda alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware entre unidades T370 pueden cambiar la cadencia de mensajes, los campos disponibles o elementos opcionales de telemetría.
- Las revisiones de hardware o las distintas variantes del módem Telit xE910 pueden influir en las bandas de red soportadas y el comportamiento del transporte.
- La configuración del lado del fabricante o las opciones de compilación pueden habilitar o deshabilitar parámetros OBD específicos o reportes de eventos.
- Elegir UDP frente a TCP puede afectar la confiabilidad de los mensajes y debería coincidir con la configuración documentada por Ulbotech para el dispositivo.
- Valide la compatibilidad y la disponibilidad de funciones contra las notas de la versión del firmware del dispositivo al planear despliegues.
- En caso de duda, confirme el comportamiento de reporte esperado revisando los primeros reportes de un equipo de prueba apuntado a d.plaspy.com en el puerto 8888.

## Por qué es importante entender el protocolo

Conocer cómo el T370 se comunica con Plaspy ayuda a asegurar un despliegue sin contratiempos, un flujo de datos confiable y una resolución de problemas más rápida cuando surjan incidencias. La conciencia del contexto de comunicación reduce la fricción en la integración y favorece la confiabilidad operativa a largo plazo.

- Facilita confirmar que el dispositivo está enviando los campos GNSS, de acelerómetro y OBD que Plaspy espera recibir.
- Permite verificar más fácilmente la configuración correcta de servidor, IP y puerto en el equipo.
- Agiliza la resolución de problemas cuando faltan reportes o la telemetría aparece incompleta.
- Ayuda a planear actualizaciones de firmware, la selección de transporte y los ajustes de APN con menos sorpresas.
- Establece expectativas claras sobre lo que Plaspy recibirá y cómo se podrá usar esa información en paneles y reglas.

## Por qué usar Plaspy con este protocolo

Usar el Ulbotech T370 con Plaspy ofrece una forma directa de recolectar ubicación de vehículos, telemetría OBD y eventos de movimiento para monitoreo de flotas, protección contra robo y análisis de conducta del conductor. El conector OBD del T370 y sus sensores integrados facilitan despliegues rápidos, mientras que Plaspy consume los datos del dispositivo para visibilidad en tiempo real, alertas de geocercas, puntuaciones y flujos remotos.

Para conocer más sobre Plaspy y cómo la plataforma funciona con dispositivos como el T370 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información específica del protocolo y las notas de firmware más recientes en el sitio del fabricante http://www.ulbotech.com/ antes de realizar despliegues a gran escala.
