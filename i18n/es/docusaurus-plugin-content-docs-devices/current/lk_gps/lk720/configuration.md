---
slug: /lk_gps/lk720/configuration
id: lk720-configuration
sidebar_label: Configuration
title: LK-GPS - LK720 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar LK720 y conectarlos a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración LK-GPS LK720
  - Configuración LK720 Plaspy
  - Configuración del rastreador LK-GPS
  - Configuración servidor LK720
  - Configuración rastreador Plaspy
  - Integración GPS Plaspy
  - Rastreo vehicular LK720
  - Configuración rastreador CatM
  - Configuración SMS LK720
  - Rastreo de flotas LK720
---

# LK-GPS - Configuración del LK720

Esta página resume el contexto público de configuración para utilizar el rastreador LK-GPS LK720 con la plataforma Plaspy. Se centra en los ajustes de servidor compartidos que Plaspy espera y en los pasos prácticos que puede realizar del lado del fabricante para preparar el LK720 y garantizar reportes confiables hacia los paneles y servicios de Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y las herramientas del proveedor. Use esta guía junto con la documentación de LK-GPS y sus herramientas de instalación para completar la configuración del dispositivo.

## Resumen de la configuración

Aquí se explica qué logrará al configurar un LK720 para integrarlo con Plaspy y por qué importa cada paso.

- Apuntar el LK720 al endpoint de servidor de Plaspy para que el dispositivo envíe datos GNSS y de estado al destino correcto.
- Elegir el transporte apropiado (UDP o TCP) y confirmar que el dispositivo usa el puerto de Plaspy para asegurar la ingestión consistente.
- Validar la conectividad celular y el acceso por SMS o app para poder aplicar ajustes y verificar el reporte.
- Confirmar que el dispositivo aparece en Plaspy tras la configuración, de modo que ubicaciones, telemetría y eventos sean visibles para los administradores de flota.
- Probar eventos clave, como geocercas, alarmas por choque/vibración y acciones de relé, para asegurarse de que Plaspy los reciba y los muestre.

## Ajustes del servidor de Plaspy

Utilice los siguientes ajustes de servidor de Plaspy al configurar el LK720. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (este es el puerto estándar que Plaspy usa para todos los dispositivos)  
- Transport: UDP o TCP son compatibles; seleccione según la preferencia del dispositivo o de la red  
- Note: Plaspy detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el rastreador al servidor y puerto correctos

## Requisitos típicos antes de empezar

Antes de comenzar, asegúrese de tener lo siguiente:

- Una unidad LK720 con alimentación, antena GNSS conectada y ubicación de montaje estable para una recepción confiable.
- Una tarjeta SIM compatible con Cat‑M y un plan de datos activo adecuado para telemetría y reporte al servidor.
- Acceso al método de configuración oficial de LK-GPS que planea usar, como comandos SMS, la app móvil de LK-GPS o la herramienta de configuración del fabricante.
- Cobertura de red Cat‑M LTE en el área de despliegue para permitir que el dispositivo alcance el servidor de Plaspy.
- Credenciales o acceso a su instancia de Plaspy para confirmar que el dispositivo aparece y reporta después de la configuración.
- Documentación del dispositivo o notas de firmware de LK-GPS para confirmar pasos específicos según el modelo o la versión de firmware.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el LK720 usa su enlace celular Cat‑M para enviar coordenadas GNSS, estado y datos de eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe y procesa estos mensajes para ofrecer ubicación en tiempo real y alertas.

- El LK720 transmite actualizaciones de ubicación GNSS a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los mensajes pueden enviarse por UDP o TCP según el transporte seleccionado en la configuración.
- Plaspy ingiere telemetría como voltaje de entrada y estado del dispositivo para mostrar condiciones de batería y alimentación.
- Triggers de eventos, incluidas alarmas por choque/vibración y entradas/salidas de geocerca, se reenvían a Plaspy para alertas y flujos de trabajo.
- La integración permite el control de relés para comandos remotos de inmovilizador cuando se emiten desde los paneles de Plaspy.

## Flujo de trabajo típico de configuración

Siga estos pasos prácticos para configurar un LK720 con Plaspy:

1. Acceda al método o software de configuración oficial de LK-GPS proporcionado por el fabricante (comandos SMS, app móvil o herramienta del proveedor).
2. En los ajustes de servidor del dispositivo, ingrese d.plaspy.com o 54.85.159.138 como destino de reporte.
3. Configure el puerto de reporte en 8888 para que el dispositivo envíe mensajes al puerto de ingestión de Plaspy.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; ambos son compatibles con Plaspy.
5. Aplique o guarde la configuración en el LK720 usando la interfaz del fabricante.
6. Reinicie el dispositivo si la documentación del proveedor requiere un reinicio para que los nuevos ajustes entren en vigor.
7. Valide que el LK720 reporta a Plaspy confirmando la visibilidad del dispositivo y las actualizaciones de ubicación en vivo en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

El LK-GPS LK720 admite múltiples métodos de configuración y los comandos exactos o pasos dependen del firmware y las herramientas del proveedor. Dado que la sintaxis de comandos del fabricante y de SMS puede cambiar entre versiones de firmware y SKUs regionales, consulte la documentación de LK-GPS para el conjunto de comandos definitivo.

Si utiliza configuración por SMS o la herramienta del proveedor, siga la sintaxis exacta proporcionada por LK-GPS. Las acciones típicas que realizará son apuntar el servidor a d.plaspy.com o 54.85.159.138, establecer el puerto 8888 y seleccionar el transporte UDP o TCP. Contacte al soporte de LK-GPS o consulte el manual del producto para obtener las cadenas de comando precisas para su firmware.

## Notas de configuración

- Las diferencias de firmware pueden modificar la sintaxis de los comandos SMS y las opciones disponibles; verifique los comandos correctos para su unidad y revisión de firmware.
- Elija TCP cuando necesite entrega orientada a conexión o UDP para menor sobrecarga; ambos son aceptados por Plaspy, pero las condiciones de red pueden influir en la fiabilidad.
- Si configura por SMS, asegúrese de que el teléfono que realiza la configuración tenga privilegios SMS y que el dispositivo esté en un área de red que acepte comandos SMS.
- Confirme que la SIM usa el APN correcto y tiene datos habilitados para Cat‑M; la falta de conectividad de datos impedirá el reporte a Plaspy.
- Mantenga la documentación del fabricante a mano para solucionar el comportamiento del relé, umbrales de eventos y las instrucciones de actualización de firmware.

## Por qué usar Plaspy con esta configuración

Usar el LK720 con Plaspy brinda a organizaciones y propietarios de vehículos visibilidad continua sobre ubicación, estado y actividad de eventos mediante una configuración de servidor compartido y consistente. La conectividad Cat‑M y el reporte de eventos del LK720 (choque, geocerca, voltaje y control de relé) lo hacen adecuado para supervisión de flotas, respuesta ante robos y gestión de vehículos de renta, manteniendo pasos de configuración homogéneos entre dispositivos.

Para saber más sobre Plaspy e integraciones de dispositivos compatibles, visite https://www.plaspy.com. Para los pasos de configuración más actuales por dispositivo, notas de firmware y sintaxis de comandos, consulte los recursos del fabricante en https://www.lk-gps.com. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar los detalles con la documentación de LK-GPS antes de un despliegue a gran escala.
