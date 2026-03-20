---
slug: /xexun/x05/configuration
id: x05-configuration
sidebar_label: Configuration
title: Xexun - X05 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xexun X05 para integrarse con Plaspy, con ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - configuración Xexun X05
  - instalación Xexun X05
  - Xexun X05 Plaspy
  - configuración rastreador Xexun
  - configuración GPS X05
  - configuración servidor Xexun
  - configuración rastreador para mascotas
  - comandos SMS rastreador GPS
  - ajustes servidor Plaspy
  - detección protocolo rastreador
---

# Xexun - Configuración del X05

Esta página describe el contexto público de configuración para usar el rastreador Xexun X05 con Plaspy. Aquí se explican los ajustes prácticos del servidor, los comandos SMS y el flujo recomendado para que el X05 envíe ubicación y telemetría a la plataforma Plaspy. El contenido se basa en la descripción del producto X05 y en los comandos de configuración públicos disponibles.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando corresponde, esta guía incluye los comandos SMS comunes para el X05 y señala los valores de servidor de Plaspy que debe aplicar para la conectividad con la plataforma.

## Resumen de la configuración

Este proceso prepara el X05 para enviar su ubicación y telemetría al endpoint en la nube de Plaspy, de modo que el dispositivo aparezca en los paneles y aplicaciones móviles de Plaspy. El objetivo es asegurar un reporte confiable por GPRS o datos celulares hacia Plaspy usando el endpoint y puerto compartidos.

- Configure el dispositivo para usar Plaspy como servidor remoto y así dirigir la ubicación y la telemetría al endpoint correcto.
- Establezca el APN del dispositivo y, si es necesario, el usuario y la contraseña del APN para que el rastreador pueda iniciar una sesión de datos.
- Aplique la IP o dominio y el puerto del servidor de Plaspy para que los reportes lleguen en tiempo real.
- Seleccione el modo de transporte (UDP o TCP) si el equipo requiere especificarlo.
- Valide la conectividad y el envío de reportes para que el rastreador quede visible y administrable en Plaspy.

## Ajustes de servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de iniciar

- Un X05 con batería cargada y encendido.
- Una SIM celular válida con plan de datos y los ajustes APN correctos para el operador.
- Acceso al método de configuración que soporte el proveedor, como comandos SMS o software oficial.
- Conocimiento de la contraseña del dispositivo o la contraseña por defecto 123456 para configuración vía SMS.
- Una cuenta en Plaspy y un espacio en la plataforma para confirmar que el dispositivo reporta después de la configuración.
- Un teléfono móvil capaz de enviar SMS al número del rastreador si emplea la configuración por SMS.

## Cómo se conecta este rastreador a Plaspy

El X05 transmite posiciones y telemetría por redes celulares locales al endpoint de Plaspy. Una vez configurado para apuntar al servidor y puerto de Plaspy, el dispositivo reporta según el intervalo establecido y Plaspy procesa y muestra los datos.

- El rastreador envía paquetes periódicos de ubicación y telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los datos se envían por el modo de transporte seleccionado, UDP o TCP, según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no requiere que usted seleccione el protocolo en la plataforma.
- Los reportes exitosos permiten visibilidad en tiempo real, alertas y reproducción histórica en Plaspy.
- Si la conectividad se interrumpe, el rastreador puede almacenar datos en búfer y retransmitirlos cuando la red se restablezca.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Xexun para el X05, generalmente el conjunto de comandos SMS del proveedor o la herramienta proporcionada por el fabricante.
2. Verifique que el dispositivo tenga una SIM funcional y el APN correcto para el operador móvil.
3. Ingrese la información del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
4. Configure el puerto remoto 8888; Plaspy utiliza el mismo puerto para todos los dispositivos.
5. Seleccione UDP o TCP si el equipo requiere elegir modo de transporte; Plaspy admite ambos y detecta el protocolo automáticamente.
6. Guarde o aplique la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el dispositivo reporte a Plaspy monitoreando la lista de equipos o el mapa en tiempo real en la plataforma.

## Comandos de configuración de ejemplo

El X05 soporta configuración vía SMS. El conjunto de comandos de ejemplo abajo usa la contraseña por defecto 123456. Envíe estos comandos en el orden indicado cuando el orden sea importante. Los marcadores de posición se mantienen y deben reemplazarse con los valores de su operador.

- Comando opcional de restauración de fábrica
```text
begin123456
```
- Configurar el APN del operador
```text
apn123456 {{apn}}
```
- Configurar el usuario del APN si se requiere
```text
apnuser123456 {{apnu}}
```
- Configurar la contraseña del APN si se requiere
```text
apnpasswd123456 {{apnp}}
```
- Establecer el servidor GPRS a Plaspy usando la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```
- Establecer modo GPRS (use el valor predeterminado del proveedor o confirme el modo con la documentación del fabricante)
```text
gprsmode123456
```
- Establecer el intervalo de actualización a 60 segundos
```text
t060s***n123456
```

Notas sobre los marcadores de posición y comandos:
- {{apn}} es la cadena APN del operador móvil necesaria para la conectividad de datos.
- {{apnu}} y {{apnp}} son el usuario y la contraseña del APN, opcionales y utilizados por algunos operadores.
- La contraseña de ejemplo 123456 es el valor por defecto en los ejemplos públicos. Reemplace con la contraseña de su dispositivo si la ha cambiado.
- El comando de restauración de fábrica begin123456 es opcional y sólo necesario si necesita restablecer la configuración antes de configurar el equipo.

## Observaciones sobre la configuración

- Versiones de firmware y variantes de hardware pueden usar formatos de comando SMS ligeramente distintos o requerir software del proveedor para algunos ajustes. Verifique los comandos con la documentación actual de Xexun.
- La configuración vía SMS está soportada por los comandos de ejemplo anteriores; los fabricantes también suelen ofrecer herramientas de configuración o utilidades de PC que realizan los mismos cambios.
- Elija UDP o TCP según las necesidades de la instalación. Plaspy admite ambos transportes en el puerto 8888 y detectará automáticamente el protocolo del rastreador.
- Todos los dispositivos que usan Plaspy emplean el mismo puerto 8888, lo que simplifica la configuración del servidor en múltiples modelos.
- Confirme los valores de APN, usuario y contraseña con el operador móvil y almacénelos de forma segura.

## Por qué usar Plaspy con esta configuración

Configurar el Xexun X05 para reportar a Plaspy ofrece visibilidad y gestión centralizada para el seguimiento de mascotas y telemetría. Con el dispositivo apuntando a Plaspy, organizaciones y propietarios obtienen acceso a ubicación en tiempo real, alertas de geocercas, reproducción histórica y enrutamiento de alertas para soporte operativo y respuesta rápida.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para detalles específicos del dispositivo, incluyendo variaciones de firmware y la sintaxis exacta de comandos SMS, consulte la documentación del fabricante en https://www.xexun.com/ ya que los métodos y comandos pueden cambiar con el tiempo.
