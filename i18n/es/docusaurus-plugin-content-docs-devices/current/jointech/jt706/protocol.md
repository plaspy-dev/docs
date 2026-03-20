---
slug: /jointech/jt706/protocol
id: jt706-protocol
sidebar_label: Protocol
title: Jointech - JT706 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Jointech JT706 y su comunicación con Plaspy para rastreo de contenedores y monitoreo de condiciones
keywords:
  - protocolo Jointech JT706
  - protocolo GPS Jointech JT706
  - protocolo de comunicación JT706
  - protocolo de rastreo JT706
  - rastreador Jointech Plaspy
  - rastreador de contenedores JT706
  - protocolo de rastreador GPS Plaspy
  - monitoreo de contenedores JT706
  - telemetría de temperatura JT706
  - compatibilidad de dispositivos Plaspy
---

# Jointech - Protocolo JT706

Esta página ofrece un resumen público y no sensible sobre el contexto de comunicación del Jointech JT706 cuando se usa con Plaspy. Se centra en cómo el rastreador reporta ubicación y telemetría ambiental a la plataforma Plaspy y qué esperar de los ajustes de conexión y transporte usados para la integración.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar a la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware del JT706, la revisión de hardware y la configuración del fabricante, por lo que esta página enfatiza el contexto público del protocolo más que detalles internos del firmware.

## Resumen del protocolo

El JT706 utiliza su protocolo de reporte para enviar datos híbridos de posicionamiento y sensores a un servidor remoto, de modo que plataformas como Plaspy puedan ingerir, normalizar y presentar información útil de rastreo y condiciones. El comportamiento del protocolo vincula los mensajes del dispositivo con la plataforma para ofrecer visibilidad en tiempo real, alertas y análisis histórico sin exponer aquí los detalles de implementación.

- Permite envíos periódicos y basados en eventos de posición y telemetría de sensores hacia la plataforma en la nube.
- Transporta información de identificación y estado para que Plaspy asocie cada dispositivo con una cuenta y un activo.
- Transmite lecturas ambientales como temperatura y humedad junto con estados de puerta y carga para monitoreo operativo.
- Soporta entradas de posicionamiento híbrido para que las localizaciones provengan de GPS y métodos basados en celular, mejorando la continuidad.
- Permite que la plataforma dispare alarmas y eventos en la línea de tiempo a partir de la telemetría recibida para respuestas a incidentes y flujos de trabajo de cumplimiento.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un punto final y puerto compartidos y aplica detección automática para identificar el protocolo del rastreador. En la mayoría de los casos, los usuarios no necesitan elegir manualmente un protocolo dentro de Plaspy si el JT706 está configurado para reportar correctamente al endpoint de la plataforma.

- Plaspy usa un único puerto para todos los dispositivos soportados, de modo que los reportes entrantes se enrutan de forma consistente al mismo endpoint de ingestión.
- Se aceptan y procesan dispositivos que apunten su reporte a d.plaspy.com o directamente a la IP de la plataforma 54.85.159.138.
- La detección automática permite que Plaspy reconozca la variante del protocolo del dispositivo a partir del tráfico inicial y aplique el tratamiento adecuado.
- La identificación correcta del dispositivo depende de que el JT706 incluya su ID de dispositivo u otro identificador equivalente en los reportes para que la plataforma pueda vincular los datos con el activo correcto.
- Cuando un dispositivo está mal configurado o bloqueado por reglas de red, la plataforma no recibirá telemetría; la resolución de problemas debe comenzar revisando la red y los ajustes de reporte del dispositivo.

## Contexto de transporte y conexión

El JT706 puede configurarse para usar transporte UDP o TCP según la configuración del equipo y el entorno de red. Plaspy acepta ambos modos de transporte en el puerto compartido para simplificar la configuración del dispositivo y reducir errores de provisión.

- Los dispositivos pueden configurarse para enviar reportes usando UDP o TCP en el puerto 8888.
- Las unidades JT706 pueden apuntar al servidor Plaspy por el nombre de host d.plaspy.com o directamente a la IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto para que el onboarding y la provisión sean consistentes entre modelos.
- La elección entre UDP y TCP depende a menudo de las opciones del firmware, la fiabilidad de la red y la preferencia del operador respecto a las características de entrega.
- Verifique que las reglas de firewall y NAT permitan tráfico saliente hacia el endpoint Plaspy en el transporte y puerto configurados.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en unidades JT706 pueden cambiar la cadencia de mensajes, los sensores disponibles en los reportes y los campos opcionales; confirme el comportamiento específico del firmware antes de un despliegue amplio.
- Diferentes revisiones de hardware o lotes de producción pueden incluir variaciones en la disponibilidad de sensores o en los modos de reporte de eventos.
- La selección del transporte entre UDP y TCP debe coincidir con la configuración del dispositivo y las restricciones de la red del operador o del carrier.
- Los comandos de configuración del fabricante y los ajustes remotos quedan fuera del alcance de este resumen público; consulte la documentación de Jointech para pasos de configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo entrante, pero la identificación correcta del dispositivo requiere que este envíe un identificador válido en sus reportes.
- Valide la compatibilidad en una prueba controlada primero para confirmar que la telemetría, las alarmas y el registro histórico se comporten como espera en su instancia de Plaspy.

## Por qué es importante entender el protocolo

Conocer el comportamiento general del protocolo de reporte del JT706 ayuda a asegurar una instalación exitosa, agilizar la resolución de problemas y mantener una operación confiable a largo plazo cuando se integra con Plaspy. Tener expectativas claras sobre transporte, direccionamiento y variaciones de firmware reduce los tiempos de inactividad y mejora la calidad de los datos.

- Ayuda a confirmar que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte soportado.
- Agiliza el diagnóstico cuando falta telemetría al enfocar las comprobaciones en la red, el transporte y la configuración de reporte del dispositivo.
- Asegura que los campos de identificación utilizados por el rastreador coincidan con los registros en Plaspy para que los datos se asignen al activo correcto.
- Orienta la decisión sobre usar UDP o TCP en función de latencia, fiabilidad y características de la red del carrier.
- Recomienda verificar las notas de la versión de firmware y los ajustes del dispositivo antes de despliegues a gran escala para evitar sorpresas.

## Por qué usar Plaspy con este protocolo

Usar el Jointech JT706 con Plaspy ofrece visibilidad centralizada para el monitoreo de contenedores y la gestión de condiciones de la carga. La combinación de fijaciones de ubicación híbridas y sensores ambientales permite a los equipos operativos recibir alertas oportunas por eventos de puertas, excursiones de temperatura y sospechas de manipulación, además de conservar registros históricos para cumplimiento y análisis.

Plaspy simplifica el onboarding de dispositivos aceptando reportes JT706 en un único puerto compartido y aplicando detección automática del protocolo, de modo que los equipos configurados para enviar telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888 pueden comenzar a reportar con una configuración mínima en la plataforma. Para obtener más información sobre Plaspy y cómo puede centralizar la telemetría de contenedores, visite https://www.plaspy.com. Para conocer el comportamiento más reciente del firmware JT706, las opciones de configuración del dispositivo y los detalles de implementación del fabricante, consulte la documentación oficial de Jointech en https://www.jointcontrols.com/ para verificar precisión y actualizaciones.
