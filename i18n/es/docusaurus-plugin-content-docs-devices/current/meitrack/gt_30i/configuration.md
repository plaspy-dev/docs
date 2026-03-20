---
slug: /meitrack/gt_30i/configuration
id: gt_30i-configuration
sidebar_label: Configuration
title: Meitrack - GT-30i Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Meitrack GT-30i con ajustes de servidor Plaspy y comandos SMS GPRS
keywords:
  - configuración Meitrack GT 30i
  - configuración GT 30i
  - GT 30i Plaspy
  - configuración rastreador GPS
  - configuración rastreador personal
  - configuración servidor GPRS
  - configuración SMS GT 30i
  - rastreador con voz bidireccional
  - configuración servidor Plaspy
  - configuración software GT 30i
---

# Meitrack - GT-30i Configuración

Esta página describe el contexto público de configuración para usar el Meitrack GT-30i con Plaspy. Reúne los ajustes de servidor prácticos y los comandos de fabricante más utilizados para que pueda preparar el dispositivo y reportar ubicación y eventos a la plataforma Plaspy. El GT-30i admite comunicación por SMS y GPRS (TCP/UDP), llamadas de voz bidireccionales, alertas SOS y memoria interna para almacenar coordenadas cuando no hay GPRS, lo que lo hace adecuado para escenarios de rastreo personal.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del equipo; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. El GT-30i acepta configuración vía SMS según los comandos públicos que se muestran abajo; valide los detalles de firmware y los valores APN con su proveedor de SIM y la documentación de Meitrack antes de aplicar cambios.

## Resumen de la configuración

Preparar el GT-30i para usar con Plaspy se centra en configurar el dispositivo para que envíe reportes GPRS a Plaspy y en verificar que esos reportes se reciben. El objetivo es asegurar comunicaciones confiables para que el dispositivo aparezca y permanezca visible en Plaspy para seguimiento en vivo y monitoreo de eventos.

- Configurar los ajustes del servidor GPRS para que el rastreador reporte al endpoint de Plaspy
- Ajustar el intervalo de reporte y los eventos para que coincidan con sus necesidades de monitoreo
- Verificar el APN y la conectividad de la SIM para que las sesiones GPRS puedan establecerse
- Utilizar los comandos SMS del GT-30i o las herramientas del fabricante para aplicar los ajustes y, opcionalmente, restaurar valores de fábrica
- Validar la telemetría del dispositivo en Plaspy para confirmar visibilidad y correcto manejo del protocolo

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com para uso cuando el dispositivo acepta nombres de dominio
- IP del servidor: 54.85.159.138 para configuración directa por IP si lo prefiere
- Puerto: 8888, que es el mismo puerto usado para todos los dispositivos en Plaspy
- Transporte: soporte para UDP o TCP según los requisitos y preferencias del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar el protocolo dentro de la plataforma

## Requisitos habituales antes de la configuración

- Un GT-30i con batería cargada y encendido, accesible para recibir SMS o configuración
- Una tarjeta SIM activa con plan de datos y el APN correcto para la red móvil
- Capacidad para enviar SMS al dispositivo o usar la herramienta oficial de configuración de Meitrack para su modelo
- Conocimiento de la contraseña del dispositivo (en los ejemplos públicos se muestra 0000) y de cualquier cambio de contraseña aplicado por su proveedor
- Conectividad confirmada a d.plaspy.com o 54.85.159.138 desde la red del dispositivo
- Una cuenta en Plaspy y acceso a la plataforma para validar que el dispositivo aparece y reporta correctamente

## Cómo se conecta este rastreador a Plaspy

El GT-30i se configura para enviar datos de posición y eventos vía GPRS al endpoint y puerto compartidos de Plaspy. Plaspy recibe los paquetes entrantes TCP o UDP, detecta automáticamente el protocolo del dispositivo y asocia el identificador del equipo para que el reporte sea visible en la plataforma.

- Las coordenadas GPS y los mensajes de evento los envía el rastreador a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El dispositivo puede usar transporte TCP o UDP según la configuración; elija el transporte que su instalación requiera
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos entrantes con el dispositivo configurado
- Eventos como SOS, alarmas por movimiento, batería baja y alertas de geocerca son reenviados a Plaspy para su monitoreo
- Cuando no hay GPRS disponible, el GT-30i almacena coordenadas en la memoria interna para subirlas más tarde al reanudarse la conectividad

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Meitrack para el GT-30i (comandos SMS o software del proveedor) según recomiende la documentación del dispositivo
2. Ingrese la dirección del servidor usando d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del equipo o en el comando SMS
3. Configure el puerto del servidor en 8888, que Plaspy usa para todos los dispositivos soportados
4. Seleccione UDP o TCP en el dispositivo si el rastreador requiere elegir el transporte para reportes GPRS
5. Ingrese el APN correcto y cualquier usuario o contraseña que requiera el operador de la SIM si el dispositivo lo solicita
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o las instrucciones del proveedor lo requieren
7. Valide que el dispositivo reporta a Plaspy comprobando la lista de dispositivos y los datos en vivo en la plataforma Plaspy

## Comandos de ejemplo para configuración

El GT-30i puede configurarse enviando comandos por SMS. Los comandos de ejemplo a continuación usan la contraseña por defecto del dispositivo 0000 tal como se muestra en el contenido público. Envíelos como mensajes SMS al número del rastreador en el mismo orden si desea seguir el ejemplo.

1. Reinicio opcional a valores de fábrica (usar solo si necesita restaurar los valores predeterminados)
```
0000,F11
```

2. Configurar servidor GPRS y APN. Este ejemplo usa la IP del servidor Plaspy. Puede reemplazar la IP por d.plaspy.com si el dispositivo acepta nombres de dominio.
```
0000,A21,2,54.85.159.138,8888,[apn]
```
Si su SIM requiere usuario y contraseña del APN, inclúyalos como campos adicionales separados por comas:
```
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
- [apn] es el APN de la red móvil
- [apnu] es el usuario del APN cuando el operador lo exige
- [apnp] es la contraseña del APN cuando el operador la exige

3. Establecer la zona horaria a UTC 0
```
0000,B36,0
```

4. Fijar el intervalo de actualización de posición a 1 minuto (ejemplo)
```
0000,A12,6,0
```
- Este comando configura el reporte periódico. Ajuste los parámetros según su firmware y necesidades.

5. Configurar el reporte de eventos (ejemplo para habilitar eventos básicos)
```
0000,C03,0
```

Nota: Mantenga el campo de contraseña (0000 en los ejemplos) si la contraseña de su dispositivo no ha sido cambiada. Si la contraseña ha sido modificada, reemplace 0000 por la contraseña actual antes de enviar los comandos.

## Notas de configuración

- La configuración vía SMS está soportada y se muestra arriba; las herramientas del fabricante o el software USB pueden ofrecer una alternativa con interfaz gráfica dependiendo del firmware
- Las versiones de firmware y las revisiones de hardware pueden requerir formatos de comando SMS ligeramente distintos o un orden de parámetros diferente; confirme siempre con la documentación oficial de Meitrack para su versión de firmware
- Elija TCP o UDP según la confiabilidad de la red y sus preferencias de monitoreo; Plaspy acepta ambos y detecta automáticamente el protocolo usado
- Asegúrese de usar los ajustes APN correctos proporcionados por su operador móvil; un APN incorrecto impedirá las conexiones GPRS
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que no necesita puertos diferentes por equipo

## Por qué usar Plaspy con esta configuración

Usar el GT-30i con Plaspy centraliza el monitoreo de ubicación y eventos para que organizaciones y responsables obtengan visibilidad consistente de la actividad del dispositivo. El soporte del GT-30i para GPRS y SMS, combinado con la detección automática de protocolos y los ajustes unificados de servidor de Plaspy, facilita la incorporación de múltiples rastreadores personales y ayuda a mantener reportes fiables para seguimiento en vivo y alertas de incidentes.

Para saber más sobre Plaspy y su compatibilidad con dispositivos visite https://www.plaspy.com. Para detalles de firmware más recientes del GT-30i, referencia completa de comandos y orientación del fabricante, verifique la información específica del dispositivo en el sitio oficial de Meitrack https://www.meitrack.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.
