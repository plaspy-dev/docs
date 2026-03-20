---
slug: /ruptela/eco5/protocol
id: eco5-protocol
sidebar_label: Protocol
title: Ruptela - Eco5 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Ruptela Eco5 para integrar rastreadores con Plaspy y asegurar comunicación fiable
keywords:
  - protocolo Ruptela Eco5
  - protocolo GPS Ruptela Eco5
  - compatibilidad Eco5 Plaspy
  - protocolo de comunicación Ruptela Eco5
  - protocolo de rastreo Eco5
  - rastreador GPS Ruptela Eco5
  - gestión de flotas Eco5
  - telemetría BLE Eco5
  - protocolo de telemetría Eco5
  - dispositivos compatibles Plaspy
---

# Ruptela - Protocolo Eco5

Esta página describe el contexto del protocolo público para usar el rastreador Ruptela Eco5 con Plaspy. Explica los roles de comunicación y las expectativas de conexión relevantes al enviar telemetría al endpoint de Plaspy, sin exponer detalles internos del fabricante. Use esta guía para comprender cómo se comunica el Eco5 con Plaspy y qué verificar durante la configuración y solución de problemas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que las indicaciones generales aquí buscan ser prácticas y seguras para despliegues, alentando siempre la validación con la documentación oficial de Ruptela.

## Resumen del protocolo

A grandes rasgos, el protocolo del dispositivo define cómo el Eco5 se identifica ante un servidor, envía posición y telemetría, y comunica estados y eventos del equipo. Para la integración con Plaspy, esto significa asegurarse de que el Eco5 esté configurado para reportar al endpoint de Plaspy para que la plataforma pueda parsear y mapear los datos entrantes hacia funciones de rastreo, alertas e informes.

- Permite al Eco5 enviar ubicación, estado de entradas/salidas, lecturas de accesorios BLE y estado del dispositivo a Plaspy.
- Incluye información de identificación que permite a Plaspy asociar mensajes con un activo específico de la flota.
- Entrega actualizaciones periódicas y basadas en eventos para que Plaspy proporcione mapas en tiempo real, historial de rutas y alertas.
- Transmite telemetría como entradas digitales, valores analógicos y datos de sensores BLE en un formato que Plaspy puede ingerir.
- Proporciona el contexto de conexión necesario para que Plaspy confirme recibos y mantenga las expectativas de sesión.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos y detecta automáticamente qué protocolo de rastreador soportado está en uso cuando los dispositivos reportan correctamente. En la mayoría de los casos no es necesario seleccionar un protocolo dentro de Plaspy; la configuración correcta del dispositivo hacia el endpoint de Plaspy es el paso clave.

- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, por lo que la configuración de puerto es consistente entre rastreadores.
- Cuando el Eco5 reporta al endpoint de Plaspy, la plataforma reconoce el formato del mensaje y lo vincula automáticamente al registro del dispositivo.
- La configuración típica requiere apuntar el dispositivo a la dirección del servidor Plaspy y usar la opción de transporte apropiada que soporte el equipo.
- Si un dispositivo está mal configurado o usa una variante de firmware inesperada, la detección en Plaspy puede requerir verificar los ajustes de reporte del equipo o el comportamiento del firmware.
- El dominio del servidor Plaspy a utilizar es d.plaspy.com y la IP del servidor es 54.85.159.138 para direccionamiento directo.

## Transporte y contexto de conexión

El Eco5 soporta conectividad celular moderna y puede configurarse para usar distintas capas de transporte según el despliegue y el firmware del equipo. Para integrar con Plaspy debe confirmar el modo de transporte y la dirección del servidor configurada en cada unidad para que los datos lleguen de forma confiable.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y las opciones de configuración.
- El dominio público del servidor de Plaspy es d.plaspy.com y la IP de Plaspy es 54.85.159.138 si necesita configurar una dirección IP directamente.
- El puerto a apuntar es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- Elija UDP o TCP en función de las características de la red y las recomendaciones del firmware; ambos protocolos están soportados para reportar a Plaspy.
- Asegúrese de que el APN y los ajustes celulares del Eco5 sean correctos para la red en la que se desplegará, de modo que el dispositivo pueda abrir el transporte elegido hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden afectar qué modos de transporte y qué elementos de mensaje están disponibles; valide las notas de la versión del firmware para las unidades Eco5.
- Las revisiones de hardware y las variantes comerciales pueden introducir cambios leves en la telemetría o el comportamiento de E/S; verifique la etiqueta de la unidad y la documentación de la variante.
- Las herramientas de configuración del fabricante, como Ruptela Device Center, también pueden influir en los ajustes de reporte del dispositivo y en el comportamiento de la configuración remota.
- La selección de transporte entre UDP y TCP puede cambiar el comportamiento de entrega y debe ajustarse a sus requisitos de red y fiabilidad.
- Confirme el APN del dispositivo y los permisos de red si las unidades se moverán entre operadores o regiones con conectividad diferente.
- Siempre contraste el comportamiento del protocolo descrito aquí con la documentación oficial de Ruptela para detalles específicos del modelo.

## Por qué es importante entender el protocolo

Comprender cómo el Eco5 se comunica con Plaspy ayuda a asegurar una configuración exitosa, acelerar la resolución de problemas y mantener una operación consistente a largo plazo cuando los dispositivos se despliegan a escala.

- Acelera el aprovisionamiento inicial al asegurar que los dispositivos apunten al servidor y puerto correctos de Plaspy.
- Reduce el tiempo de depuración cuando surgen problemas de conectividad, mapeo o telemetría.
- Le ayuda a elegir UDP o TCP de forma adecuada según las garantías de entrega y el comportamiento de la red.
- Asegura la interpretación correcta de entradas, datos de sensores BLE y estado del dispositivo dentro de los paneles de Plaspy.
- Mejora la planificación de mantenimiento al saber qué factores de firmware o hardware pueden cambiar los patrones de reporte del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el Ruptela Eco5 con Plaspy ofrece una forma práctica de centralizar datos de ubicación en tiempo real, telemetría y eventos para flotas de cualquier tamaño. Las características del hardware Eco5, como un módulo GNSS u‑blox de alta gama, BLE 5.0 para conectividad de accesorios, E/S robustas para combustible e identificación de conductor, y opciones de carcasa resistente, lo hacen adecuado para flotas mixtas. Cuando se configura para reportar a Plaspy, esas capacidades se traducen en paneles accionables, alertas automatizadas y flujos de trabajo operativos que mejoran la visibilidad y la capacidad de respuesta.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el Eco5 visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información específica más reciente del Eco5 en el sitio oficial del fabricante https://ruptela.com/ para obtener la documentación actualizada.
