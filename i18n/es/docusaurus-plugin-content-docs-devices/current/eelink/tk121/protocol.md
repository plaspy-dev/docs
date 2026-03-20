---
slug: /eelink/tk121/protocol
id: tk121-protocol
sidebar_label: Protocol
title: EElink - TK121 Protocol
sidebar_class_name: menu_item_tracker
description: Guía compacta del protocolo público para usar el EElink TK121 en plataformas compatibles con Plaspy
keywords:
  - eelink tk121 protocolo
  - eelink tk121 protocolo GPS
  - eelink tk121 comunicación
  - eelink tk121 protocolo de rastreo
  - protocolo MoveLink 1.9 2.0
  - compatibilidad de dispositivos plaspy
  - protocolo de rastreador plaspy
  - protocolo rastreador GPS vehicular
  - tk121 seguimiento en tiempo real
  - integración protocolo eelink
---

# EElink - Protocolo TK121

Esta página describe el contexto público del protocolo para usar el rastreador GPS EElink TK121 con la plataforma Plaspy. Se centra en cómo el equipo se comunica con Plaspy en términos generales, qué papel juega el protocolo de reporte y qué aspectos verificar al integrar el TK121 en flotas o procesos de seguridad. La información está pensada para ayudar a usuarios técnicos e integradores a comprender la relación de conexión y reporte entre el TK121 y Plaspy sin exponer detalles sensibles de implementación.

El TK121 suele distribuirse con soporte para MoveLink protocolo 1.9/2.0 y ofrece posicionamiento GPS con respaldo LBS y asistencia AGPS. Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando los equipos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que debe verificar el funcionamiento del equipo frente a la documentación y notas de firmware actuales de EElink.

## Resumen del protocolo

El protocolo de reporte del rastreador define cómo el TK121 se identifica, envía posiciones y reporta telemetría y eventos de alarma a una plataforma de backend como Plaspy. Para integraciones que usan MoveLink, el protocolo permite actualizaciones de ubicación en tiempo real, reportes de estado y comandos de configuración remota enviados por la plataforma o a través de canales de gestión compatibles.

- Permite al TK121 transmitir fijaciones GNSS, posiciones por celdas como respaldo y actualizaciones asistidas por AGPS a Plaspy.
- Transporta telemetría de eventos y estado, como el estado de ignición ACC, alertas de energía y batería, exceso de velocidad y alarmas por vibración.
- Autoriza la configuración remota de parámetros y desencadenantes de configuración mediante comandos de la plataforma o SMS según la configuración del equipo.
- Proporciona un identificador que Plaspy usa para asociar los mensajes entrantes con el registro de dispositivo y cuenta correctos.
- Soporta el reenvío de eventos de alarma y telemetría para que Plaspy pueda activar notificaciones y reglas de automatización.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los rastreadores en un endpoint de red compartido y aplica detección automática de protocolo, por lo que la mayoría de los equipos correctamente configurados comienzan a reportar sin que usted tenga que seleccionar el protocolo manualmente dentro de la plataforma. Si el TK121 está apuntado a Plaspy y usa una variante MoveLink compatible, Plaspy emparejará los mensajes entrantes con el dispositivo y comenzará a procesar ubicación y eventos.

- Plaspy escucha en un endpoint común al que los dispositivos reportan en d.plaspy.com y en la dirección de servidor correspondiente 54.85.159.138.
- Todos los dispositivos soportados por Plaspy se conectan usando el mismo puerto, lo que simplifica la configuración y puesta en marcha.
- El TK121 puede configurarse para usar TCP o UDP para alcanzar el endpoint de Plaspy según la configuración del equipo y las condiciones de la red.
- En la mayoría de los casos no será necesario elegir manualmente un protocolo en Plaspy si el TK121 está correctamente configurado para reportar al endpoint de Plaspy.
- Verifique los identificadores del equipo (IMEI o ID del dispositivo) y la configuración de la cuenta para que Plaspy pueda asociar correctamente los reportes entrantes con su flota.

## Transporte y contexto de conexión

Las decisiones de conexión afectan cómo el TK121 entrega mensajes a Plaspy, pero no cambian el rol público del protocolo. El dispositivo puede usar UDP o TCP en el puerto 8888 para transmitir datos y Plaspy acepta cualquiera de los dos transportes para este modelo. Los equipos pueden resolverse por nombre de host o apuntar directamente a la dirección de servidor proporcionada.

- El TK121 puede configurarse para usar UDP o TCP en el puerto 8888 al enviar datos a Plaspy.
- Los dispositivos destinados a reportar a Plaspy deben apuntar al host d.plaspy.com o, como alternativa, a la dirección de servidor 54.85.159.138.
- El puerto 8888 se utiliza de forma uniforme en Plaspy para todos los rastreadores compatibles, por lo que el mismo puerto de salida simplifica la configuración en campo.
- La estabilidad de la red, el comportamiento de NAT y las restricciones del operador pueden influir en si TCP o UDP funcionan mejor en una instalación concreta.
- Confirme que las reglas de firewall y la configuración del APN en el enlace celular permiten tráfico saliente hacia el endpoint y el puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar comandos disponibles, la frecuencia de reporte y campos opcionales. Verifique la versión de firmware del equipo al validar el comportamiento de la integración.
- Las variaciones de hardware y las opciones de accesorios (por ejemplo, cableado de relés o sensores externos) pueden alterar qué campos de telemetría aparecen en los reportes.
- Las variantes del protocolo MoveLink 1.9 y 2.0 son las comúnmente mencionadas para el TK121; confirme la variante exacta en uso en sus unidades.
- Elegir transporte TCP o UDP puede afectar las características de entrega pero no el hecho de que Plaspy acepta reportes en el puerto común.
- La configuración por defecto del fabricante puede apuntar a otro servidor; asegúrese de que el dispositivo esté configurado para reportar al endpoint de Plaspy.
- Para formatos de comando específicos del dispositivo, nombres de parámetros y cadenas de control por SMS, consulte la documentación de EElink para la sintaxis correcta y actualizada.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una incorporación confiable, la interpretación correcta de los datos del equipo y una solución de problemas más rápida cuando los dispositivos no se comportan como se espera. Tener claro qué transmite el protocolo y cómo se conecta el dispositivo permite a los administradores ajustar reportes, alarmas y flujos de trabajo según las necesidades operativas.

- Confirma que los campos de posición, alarma y estado enviados por el TK121 se mapean a las ranuras de telemetría esperadas en Plaspy.
- Ayuda a diagnosticar problemas de conexión al acotar si los fallos están relacionados con el transporte, la configuración o el firmware.
- Facilita la configuración correcta de actualizaciones de parámetros remotos y controles de inmovilizador cuando esas funciones son necesarias.
- Permite planificar reglas de red y firewall para que los dispositivos puedan alcanzar de manera consistente el endpoint de Plaspy.
- Reduce el tiempo de incorporación al alinear la configuración del equipo con las expectativas de Plaspy antes del despliegue.

## Por qué usar Plaspy con este protocolo

Usar el TK121 con Plaspy brinda visibilidad centralizada en tiempo real y manejo de eventos para operaciones de flota y seguridad. La combinación de posicionamiento doble (GPS con respaldo LBS), asistencia AGPS y compatibilidad MoveLink permite a las organizaciones capturar actualizaciones de ubicación oportunas y telemetría esencial mientras confían en Plaspy para presentar los datos, activar alertas y alimentar flujos operativos.

La arquitectura de Plaspy simplifica la incorporación de equipos al exponer un único endpoint y puerto al que el TK121 puede configurarse para reportar, y al detectar automáticamente el protocolo del dispositivo para que la mayoría de las unidades comiencen a reportar sin selección manual. Para obtener más información sobre Plaspy y cómo puede integrar dispositivos TK121 en sus procesos de flota o seguridad visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información específica más reciente del dispositivo en el sitio del fabricante https://www.eelink.com.cn/.
