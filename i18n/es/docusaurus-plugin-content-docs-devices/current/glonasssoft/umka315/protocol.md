---
slug: /glonasssoft/umka315/protocol
id: umka315-protocol
sidebar_label: Protocol
title: GLONASSsoft - UMKa315 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo UMKa315 de GLONASSsoft e integración con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - Protocolo GLONASSsoft UMKa315
  - Protocolo GPS UMKa315
  - UMKa315 Wialon Combine
  - UMKa315 EGTS
  - Compatibilidad UMKa315 Plaspy
  - Protocolo de comunicación UMKa315
  - Protocolo de rastreo UMKa315
  - Protocolo de dispositivo Plaspy
  - Rastreo de vehículos UMKa315
  - Rastreador BLE UMKa315
---

# GLONASSsoft - Protocolo UMKa315

Esta página describe el contexto público del protocolo para usar el rastreador GLONASSsoft UMKa315 con Plaspy. Se centra en cómo comunica el dispositivo en términos generales, qué ajustes de conexión se utilizan para reportar a Plaspy y qué aspectos del protocolo del equipo son relevantes para una integración y operación continuas. La información está dirigida a integradores de sistemas, gestores de flotas y usuarios técnicos que preparan dispositivos para su uso con Plaspy.

Plaspy acepta telemetría de una amplia gama de dispositivos mediante ajustes de conexión compartidos y detección automática de protocolo. El UMKa315 soporta modos binarios eficientes como Wialon Combine y EGTS, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Aquí se presenta el contexto público y no sensible del protocolo, recomendando consultar la documentación del fabricante para detalles específicos por firmware.

## Resumen del protocolo

El UMKa315 transmite telemetría, ubicación, datos de sensores y eventos en paquetes compactos pensados para minimizar el tráfico GPRS y permitir actualizaciones frecuentes. Su compatibilidad con el protocolo binario Wialon Combine y con EGTS reduce el uso de ancho de banda manteniendo la información que Plaspy necesita para el seguimiento en tiempo real, alertas e informes.

- Permite reportes regulares de posición GNSS y subidas de telemetría al servidor para seguimiento en tiempo real.
- Envía la identidad del dispositivo y el contexto de la sesión para que Plaspy asocie los datos entrantes con el activo y la cuenta correctos.
- Incluye estados de sensores y entradas (encendido, puertas, sensores analógicos) que Plaspy mapea a eventos y campos de telemetría.
- Soporta identificación por BLE y datos de sensores BLE externos para ampliar la telemetría más allá del GNSS y las entradas digitales.
- Utiliza formatos binarios compactos para reducir el tráfico GPRS mientras mantiene una alta frecuencia de actualización y granularidad de eventos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría en un endpoint compartido y detecta automáticamente el protocolo del rastreador, por lo que en la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si los dispositivos están configurados correctamente para reportar. La configuración del dispositivo apuntando al endpoint de Plaspy es el requisito principal para la detección automática y la ingestión de datos.

- Plaspy public server domain for device reporting is d.plaspy.com.
- Plaspy public server IP for device reporting is 54.85.159.138.
- El servidor de Plaspy escucha en el puerto 8888 para todo el tráfico de dispositivos y todos los dispositivos compatibles usan este mismo puerto.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP hacia el endpoint de Plaspy en el puerto 8888, según la capacidad del equipo y la configuración elegida.
- Cuando un UMKa315 está apuntando al endpoint y puerto de Plaspy, el sistema identificará el protocolo entrante y dirigirá los datos al pipeline de procesamiento correspondiente sin necesidad de selección manual del protocolo.

## Transporte y contexto de conexión

El contexto de conexión es clave para garantizar que la telemetría del dispositivo llegue confiablemente a Plaspy. El UMKa315 soporta los transportes móviles comunes y puede configurarse para apuntar al endpoint de Plaspy usando DNS o la dirección IP directa.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 para el reporte de datos.
- El UMKa315 se puede configurar para usar UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- Plaspy utiliza el mismo puerto de red 8888 para todos los dispositivos soportados, lo que simplifica el despliegue y las reglas de firewall.
- Elija UDP o TCP según la capacidad del equipo, la fiabilidad de la red y las preferencias del operador; ambos transportes son compatibles para alcanzar Plaspy en el puerto requerido.
- Asegúrese de que el plan de datos de la SIM y los ajustes APN en el UMKa315 permitan conexiones GPRS hacia el endpoint de Plaspy para telemetría continua.

## Notas sobre compatibilidad del protocolo

- Se reporta soporte de Wialon Combine y EGTS en el UMKa315, pero las revisiones de firmware pueden cambiar qué características o variantes del protocolo están disponibles.
- Las revisiones de hardware y las interfaces opcionales, como RS-485 o el comportamiento de BLE, pueden afectar qué campos de telemetría están presentes en los reportes.
- La selección de transporte (UDP vs TCP) es configurable en el dispositivo y puede influir en la confiabilidad según las condiciones de la red móvil.
- Plaspy detecta el protocolo automáticamente, pero el destino correcto del equipo (dominio o IP) y el puerto deben estar configurados en el rastreador.
- Verifique el mapeo de entradas discretas, canales analógicos y sensores BLE a los campos de telemetría de Plaspy durante la configuración inicial y las pruebas.
- Consulte las notas de versión del fabricante para cambios específicos de firmware que puedan afectar la integración.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del UMKa315 reduce el tiempo de configuración, agiliza la resolución de problemas y mejora la confiabilidad a largo plazo de los datos del dispositivo en Plaspy. Saber qué protocolos soporta el equipo y cómo transmite los datos permite planear el consumo, el manejo de eventos y el mapeo de sensores.

- Garantiza que los dispositivos se configuren para enviar telemetría al endpoint y puerto correctos de Plaspy, de modo que los datos se ingieran automáticamente.
- Facilita el mapeo de entradas y sensores analógicos a campos útiles y alertas dentro de Plaspy.
- Ayuda a diagnosticar problemas de conectividad confirmando transporte, APN y ajustes de endpoint.
- Permite planificar costos de datos y frecuencia de actualización, ya que Wialon Combine y EGTS reducen el tráfico frente a formatos verbosos.
- Aporta confianza al desplegar actualizaciones de firmware o revisiones de hardware al aclarar qué características de protocolo son necesarias para su implementación.

## Por qué usar Plaspy con este protocolo

Usar el UMKa315 con Plaspy ofrece una combinación práctica para monitoreo de flotas y activos cuando se requiere hardware compacto, telemetría eficiente y extensiones BLE. El soporte del UMKa315 para Wialon Combine y EGTS encaja bien con las capacidades de ingestión de Plaspy para ofrecer actualizaciones frecuentes de posición y contexto de sensores manteniendo bajo el uso de datos.

El modelo de endpoint compartido de Plaspy y la detección automática de protocolo simplifican la incorporación de dispositivos, mientras que el soporte para entradas, sensores analógicos, identificación BLE y registro en caja negra offline permite flujos de trabajo operativos versátiles para flotas, remolques y activos. Para más información sobre Plaspy, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica más reciente del dispositivo y las notas de firmware directamente con el fabricante en https://glonasssoft.ru/.
