---
slug: /tk_star/xe108/configuration
id: xe108-configuration
sidebar_label: Configuration
title: TK-Star - XE108 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador TK-Star XE108 y su compatibilidad con Plaspy
keywords:
  - configuración TK-Star XE108
  - instalación TK-Star XE108
  - configuración servidor XE108
  - configuración rastreador Plaspy
  - configuración rastreador GPS XE108
  - rastreo de vehículos XE108
  - configuración GPRS XE108
  - TK-Star rastreador Plaspy
  - comandos SMS XE108
  - configuración APN XE108
---

# TK-Star - XE108 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador portátil TK-Star XE108 con Plaspy. Se centra en los ajustes prácticos del servidor, los comandos SMS de configuración que provee el fabricante y los pasos que debe seguir para poner el dispositivo en línea en la plataforma Plaspy. El objetivo es ayudar a usuarios técnicos a preparar el rastreador para que reporte a Plaspy usando las configuraciones compartidas de la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que generalmente solo necesita indicar el endpoint y el puerto comunes en el lado del dispositivo. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que confirme siempre los comandos y el flujo de trabajo siguientes con el manual del dispositivo y el sitio del fabricante.

## Resumen de la configuración

El proceso de configuración prepara el XE108 para que envíe datos de ubicación y eventos a la plataforma Plaspy. Esto incluye configurar el APN de datos móviles si es necesario, apuntar el dispositivo al servidor de Plaspy, elegir el protocolo de transporte si se solicita y habilitar subidas periódicas.

- Configure el APN y sus credenciales para que el rastreador use datos móviles y reporte vía GPRS.
- Apunte el rastreador al endpoint del servidor de Plaspy para que los paquetes de ubicación lleguen a la plataforma.
- Ajuste el intervalo de envío y el modo de reporte para controlar la frecuencia de envío de posiciones.
- Valide la conectividad para que el equipo aparezca en Plaspy y envíe telemetría.
- Utilice comandos SMS del fabricante o herramientas de configuración para aplicar los ajustes y reiniciar el dispositivo según sea necesario.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el XE108:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo específico más allá de UDP o TCP si el dispositivo solicita elegir el transporte

## Requisitos típicos antes de la configuración

- Un dispositivo XE108 cargado con la tarjeta SIM instalada y con datos activos si va a usar reportes por GPRS.
- Acceso al método de configuración del XE108 soportado por el dispositivo, como comandos SMS o la herramienta de configuración del proveedor.
- El APN correcto, usuario APN y contraseña APN del operador de la SIM si se requieren datos móviles.
- Conocimiento de la contraseña del dispositivo utilizada para autorizar los comandos de configuración (en los ejemplos abajo se usa la contraseña por defecto 123456).
- Un teléfono móvil capaz de enviar mensajes SMS al rastreador si va a usar la configuración por SMS.
- Acceso básico a Plaspy y la posibilidad de confirmar que el dispositivo aparece y reporta en la plataforma una vez completada la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el XE108 se ajusta para enviar sus paquetes de ubicación y eventos al endpoint compartido de Plaspy en el puerto 8888. Plaspy recibe esos paquetes y determina automáticamente el protocolo del rastreador para decodificar los mensajes y mostrar la telemetría en la plataforma.

- El rastreador reporta actualizaciones de posición a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Plaspy acepta conexiones por UDP o TCP dependiendo de cómo esté configurado el dispositivo.
- Plaspy detecta el protocolo del rastreador automáticamente, por lo que no es necesaria una selección de protocolo aparte de elegir UDP o TCP si el dispositivo obliga a seleccionar el transporte.
- Una vez que el dispositivo comience a enviar paquetes al endpoint de Plaspy, será visible en la plataforma para monitoreo y trazado histórico.
- El reporte de eventos como SOS, alertas de movimiento o batería baja se reenviará a Plaspy cuando el dispositivo envíe esos mensajes.

## Flujo común de configuración

1. Acceda al método oficial de configuración de TK-Star, como la interfaz de comandos SMS descrita por el fabricante o una herramienta de configuración soportada.
2. Configure el APN y sus credenciales usando los comandos o la herramienta recomendada por el fabricante para que el rastreador pueda usar datos móviles.
3. Indique el servidor de Plaspy especificando d.plaspy.com o la IP directa 54.85.159.138 en el dispositivo.
4. Ajuste el puerto a 8888 en la configuración del equipo.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte.
6. Aplique o guarde la configuración en el dispositivo y reinicie o haga un reboot del rastreador si lo exige el fabricante.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de equipos y las posiciones recientes en la plataforma.

## Comandos de configuración de ejemplo

El XE108 soporta configuración vía SMS. El fabricante provee los siguientes comandos públicos por SMS. La contraseña por defecto del dispositivo usada en estos ejemplos es 123456. Envíe cada comando como un SMS separado al número del dispositivo.

1. Restauración de fábrica opcional (usar solo cuando sea necesario)
```
begin123456
```

2. Configurar el APN del operador (reemplazar [apn] con el APN de su operador)
```
apn123456 [apn]
```

3. Configurar el nombre de usuario del APN si lo requiere su operador (reemplazar [apnu] con el nombre de usuario)
```
apnuser123456 [apnu]
```

4. Configurar la contraseña del APN si lo requiere su operador (reemplazar [apnp] con la contraseña del APN)
```
apnpasswd123456 [apnp]
```

5. Establecer el servidor GPRS al endpoint de Plaspy usando la IP directa y el puerto
```
adminip123456 54.85.159.138 8888
```

6. Establecer el intervalo de envío a 60 segundos (intervalo de ejemplo)
```
upload123456 60
```

7. Cambiar el dispositivo al modo GPRS para que use datos móviles
```
gprs123456
```

Notas sobre placeholders y comandos:
- Mantenga los placeholders [apn], [apnu] y [apnp] tal como aparecen y reemplácelos con los valores de su operador al enviar los SMS.
- El comando que apunta al servidor usa la IP de Plaspy y el puerto requerido 8888. También puede indicar d.plaspy.com en lugar de la IP si el dispositivo soporta nombres de dominio.
- El comando de restauración de fábrica comienza con begin seguido de la contraseña del dispositivo. Úselo solo cuando sea necesario restablecer a fábrica.

## Notas sobre la configuración

- El fabricante del XE108 ofrece comandos por SMS como un método público sencillo de configuración; algunos instaladores prefieren usar herramientas del proveedor según la versión de firmware y las utilidades disponibles.
- Revisión de firmware o variantes de hardware pueden cambiar los comandos disponibles, el formato de los comandos o las contraseñas por defecto; confirme los comandos con la documentación más reciente del fabricante.
- Si el dispositivo requiere elegir transporte, pruebe tanto UDP como TCP. Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo usado por el rastreador.
- Todos los dispositivos que se conectan a Plaspy usan el mismo puerto, por lo que utilice el puerto 8888 de forma consistente para los dispositivos soportados.
- Al cambiar el APN o los ajustes del servidor, espere un breve periodo tras el reinicio para que el dispositivo se registre en la red móvil y comience el reporte por GPRS.

## Por qué usar Plaspy con esta configuración

Configurar el TK-Star XE108 para que reporte a Plaspy brinda a organizaciones y particulares una forma centralizada de recibir actualizaciones de ubicación, alertas de eventos y trazados históricos en una sola plataforma. Plaspy gestiona la detección de protocolos y acepta conexiones por opciones de transporte estándar, así que una vez que el dispositivo apunte al servidor compartido y al puerto, la plataforma podrá decodificar y presentar los datos del equipo.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Para referencias de comandos específicas del XE108, notas de firmware y detalles de hardware consulte la información del fabricante en https://www.tk-star.com/
