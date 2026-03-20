---
slug: /autofon/termo/configuration
id: termo-configuration
sidebar_label: Configuration
title: AutoFon - Термо Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del controlador AutoFon Термо y su integración con Plaspy mediante servidores compartidos y detección automática de protocolo
keywords:
  - Configuración AutoFon Термо
  - Instalación AutoFon Термо
  - AutoFon Термо Plaspy
  - Configuración servidor AutoFon Термо
  - Configuración controlador calentador AutoFon
  - Integración calentadores Plaspy
  - Configuración rastreador Plaspy
  - Configuración módulo precalentamiento vehículo
  - Configuración gestión calentadores flota
  - Integración plataforma seguimiento
---

# AutoFon - Термо Configuración

Esta página aborda el contexto público de configuración para usar el controlador de calefacción AutoFon Термо con la plataforma Plaspy. Explica los ajustes de servidor compartidos de Plaspy que aplican a las integraciones y describe consideraciones prácticas de instalación para técnicos e instaladores que desean incluir la funcionalidad AutoFon Термо en flujos telemáticos gestionados por Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione el proveedor. Use esta guía para entender el punto de enlace de Plaspy y el flujo típico para integrar eventos de AutoFon Термо en una flota administrada por Plaspy, y siempre verifique las instrucciones específicas del dispositivo con el fabricante.

## Resumen de la configuración

AutoFon Термо es un controlador de calefacción basado en GSM diseñado para operar calentadores auxiliares posventa mediante SMS y menú de voz. Cuando se integra en un entorno gestionado por Plaspy, la unidad aporta control de calefacción y registros de eventos a la telemática de la flota, normalmente mediante un gateway o rastreador GPS compatible con Plaspy que reenvía los eventos de calefacción a la plataforma.

- Prepare el AutoFon Термо para que los eventos de encendido/apagado del calentador y las acciones del temporizador puedan registrarse en Plaspy.
- Configure el dispositivo o un gateway reenviante para enviar telemetría o notificaciones de eventos a Plaspy usando los ajustes de servidor compartidos.
- Valide la conectividad y el reporte de eventos para que Plaspy muestre la actividad del calentador junto con la posición GPS y la telemetría del vehículo.
- Asegúrese de que el instalador tenga acceso y de conocer el método correcto de configuración del fabricante antes de realizar pruebas con Plaspy.
- Verifique que el controlador del calentador y cualquier dispositivo reenviante apunten al endpoint y puerto de Plaspy para que los eventos aparezcan en la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para ingestión en la plataforma Plaspy
- IP del servidor 54.85.159.138 como endpoint alternativo alcanzable
- Puerto 8888 usado por Plaspy para la comunicación con dispositivos
- Soporte de transporte UDP o TCP según las capacidades del dispositivo o gateway
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que un único valor de puerto aplica a todo el hardware compatible

## Requisitos previos típicos

- Confirme que tiene acceso al método de configuración oficial de AutoFon Термо o a la herramienta de instalador proporcionada por el fabricante
- Asegúrese de que el dispositivo esté alimentado y conectado correctamente al vehículo y al circuito de control del calentador auxiliar
- Una SIM GSM funcional con servicio apropiado para SMS o datos según lo exija la instalación
- Si se usa un gateway reenviante o un rastreador GPS compatible con Plaspy, tenga ese dispositivo configurado y accesible
- Acceso al vehículo para probar el botón local y las operaciones de control remoto
- Conocimiento de cualquier diferencia por versión de firmware o variante de hardware señalada por el instalador

## Cómo se conecta este rastreador a Plaspy

AutoFon Термо es principalmente un controlador GSM por SMS y menú de voz, más que un rastreador GNSS independiente. La integración con Plaspy suele realizarse reenviando eventos y estados del calentador desde un gateway telemático o rastreador GPS compatible con Plaspy hacia el endpoint del servidor de Plaspy. Una vez reenviados, Plaspy recibe esos eventos en su endpoint compartido y los vincula con la telemetría del vehículo y los flujos de trabajo de la flota.

- Los eventos de encendido, apagado y temporizador del calentador se reenvían a Plaspy para mostrarse junto con la ubicación GPS y otra telemetría
- El estado del botón local y los comandos remotos por SMS pueden ser capturados por un dispositivo reenviante y enviados a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy agrupa los eventos del dispositivo por vehículo e incluye los eventos del calentador en informes e historiales
- Cuando un gateway o rastreador reenvía datos, Plaspy detecta automáticamente el protocolo entrante y procesa los eventos
- Usar el endpoint y puerto compartidos de Plaspy garantiza una ingestión consistente de eventos de calentador en toda la flota

## Flujo típico de configuración

1. Acceda al método de configuración oficial de AutoFon Термо o al software de instalador documentado por el fabricante
2. Si el dispositivo permite configurar el servidor o cuando configure un gateway reenviante, ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor
3. Establezca el puerto del servidor en 8888, que Plaspy utiliza para todos los dispositivos soportados
4. Elija UDP o TCP como transporte si el dispositivo o gateway requiere seleccionar uno
5. Aplique o guarde la configuración en la herramienta del fabricante o en la interfaz del gateway reenviante
6. Reinicie el dispositivo o el gateway si el fabricante lo requiere para aplicar los ajustes de red
7. Verifique que el dispositivo o el gateway reporten eventos a Plaspy y que los eventos aparezcan en la plataforma

## Ejemplos de comandos de configuración

La información del fabricante para AutoFon Термо incluida aquí no proporciona cadenas de comando públicas específicas para la configuración directa del servidor. Los comandos y formatos de configuración exactos varían según el firmware y la herramienta de configuración utilizada por los instaladores. Para muchos controladores de calefacción basados únicamente en GSM, el enfoque común de integración es usar un rastreador GPS o gateway telemático compatible con Plaspy para capturar los eventos del calentador y reenviarlos al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.

Si dispone de comandos SMS o instrucciones de configuración específicas del proveedor, conserve el orden de los comandos y use la documentación del proveedor para aplicar las direcciones y los valores de puerto. Siempre pruebe los comandos en un entorno controlado antes de desplegarlos en toda la flota.

## Notas de configuración

- AutoFon Термо es un controlador GSM con control por SMS y voz; puede que no soporte de forma nativa el reporte por TCP o UDP. Use un gateway reenviante o un rastreador GPS compatible con Plaspy cuando no haya reporting IP directo.
- Las diferencias en versiones de firmware y revisiones de hardware pueden cambiar las opciones de configuración y los formatos de comando disponibles. Confirme los detalles de firmware antes de aplicar ajustes.
- Elija UDP o TCP según las capacidades del dispositivo reenviante. Plaspy acepta ambos transportes en el puerto compartido 8888.
- Dado que el dispositivo está descontinuado y fuera de stock, los instaladores deben documentar la configuración exacta utilizada y considerar alternativas para despliegues futuros.
- Consulte siempre la documentación oficial del fabricante para cualquier comando de restablecimiento o de bajo nivel y marque cualquier paso de reseteo como opcional salvo que sea necesario para la configuración inicial

## Por qué usar Plaspy con esta configuración

Integrar los eventos de AutoFon Термо en Plaspy ayuda a las flotas y operadores a unificar la actividad del control de calentadores con la ubicación y la telemetría operativa. Cuando los eventos de encendido/apagado y los historiales de temporizador se reenvían a Plaspy, los gestores de flota obtienen visibilidad sobre la disponibilidad del vehículo, los calentamientos programados y los comandos remotos ad hoc junto con las rutas rastreadas por GPS y otros datos del vehículo. Esta combinación facilita una programación más eficiente, reduce el desgaste por arranques en frío y mejora el confort del operador en operaciones en climas fríos.

Para obtener más información sobre Plaspy y cómo puede gestionar eventos de calentadores junto con la telemetría del vehículo visite https://www.plaspy.com. Para las instrucciones más actuales específicas del dispositivo, notas de firmware y recomendaciones del fabricante, verifique los detalles con la documentación oficial de AutoFon en https://www.autofon.ru/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
