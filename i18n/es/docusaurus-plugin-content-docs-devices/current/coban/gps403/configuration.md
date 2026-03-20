---
slug: /coban/gps403/configuration
id: gps403-configuration
sidebar_label: Configuration
title: Coban - GPS403 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Coban GPS403 con los ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración Coban GPS403
  - Configuración servidor Coban GPS403
  - Configurar GPS403 para Plaspy
  - Configuración software seguimiento GPS403
  - Configurar plataforma GPS403
  - Configuración rastreador Coban
  - Configuración SMS rastreador
  - Ajustes APN GPS403
  - detección protocolo rastreador
  - Configuración servidor Plaspy
---

# Coban - Configuración del GPS403

Esta página explica el contexto público de configuración para usar el rastreador Coban GPS403 con la plataforma de flotas Plaspy. Reúne los ajustes del servidor Plaspy que debe ingresar en el dispositivo y los comandos SMS del fabricante más comunes que utilizan instaladores y técnicos de flota para preparar el rastreador y que reporte a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El GPS403 admite configuración por SMS y GPRS; esta guía incluye los comandos SMS públicos frecuentemente usados para la puesta en marcha y verificación, y le recomienda consultar la documentación de Coban para variaciones específicas del dispositivo.

## Resumen de la configuración

Preparar un GPS403 para trabajar con Plaspy se centra en configurar el acceso a la red y el punto final del servidor Plaspy, validar la conectividad y habilitar las funciones de reporte necesarias para la visibilidad en la plataforma. Los comandos SMS de ejemplo que siguen son comandos públicos del dispositivo comúnmente usados en instalaciones de campo.

- Configure el APN y las credenciales APN opcionales para que el rastreador pueda usar datos GPRS.
- Apunte el dispositivo al dominio o IP del servidor Plaspy y establezca el puerto compartido que usa Plaspy.
- Seleccione el modo de transporte (UDP o TCP) si el dispositivo o la red lo requieren.
- Establezca el intervalo de reporte y la zona horaria para que las actualizaciones de posición y las marcas de tiempo coincidan con sus requerimientos operativos.
- Verifique los ajustes y confirme que el dispositivo está reportando a Plaspy utilizando los comandos de verificación del rastreador.
- Opcionalmente, habilite opciones de protocolo relacionadas con el reporte de sensores según sea necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com para configuración basada en nombre de host.
- IP del servidor: 54.85.159.138 si el dispositivo requiere una dirección numérica.
- Puerto: 8888 que Plaspy usa para todos los dispositivos compatibles.
- Soporte de transporte: UDP o TCP según la preferencia del dispositivo o la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el dispositivo al endpoint y al puerto de Plaspy.

Nota: Plaspy utiliza el mismo puerto para todos los dispositivos y realiza la detección de protocolo en el servidor.

## Requisitos típicos antes de empezar

- Confirme que el GPS403 tiene una conexión de alimentación funcional y está correctamente instalado.
- Una tarjeta SIM activa con datos habilitados y un APN válido para el operador móvil.
- Capacidad para enviar mensajes SMS al dispositivo para configuración vía SMS o acceso a la herramienta de configuración del fabricante.
- La contraseña por defecto del dispositivo si está presente (la contraseña por defecto usada en los ejemplos es 123456).
- Cobertura GSM GPRS en las bandas que soporta el GPS403.
- Acceso a la documentación oficial de Coban o la guía de instalador para detalles específicos de firmware.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GPS403 enviará la ubicación y la telemetría del dispositivo al endpoint del servidor Plaspy utilizando el transporte seleccionado. Plaspy recibe e interpreta los datos y los exhibe en la plataforma para monitoreo e informes.

- El rastreador queda configurado para reportar al endpoint compartido de Plaspy y al puerto de Plaspy.
- Los datos se envían por GPRS al dominio d.plaspy.com o a la IP 54.85.159.138 según su configuración.
- Puede elegir UDP o TCP como transporte cuando sea requerido por el dispositivo o la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la interpretación en el servidor es automática.
- Eventos e informes periódicos de posición se vuelven visibles en Plaspy una vez que el dispositivo se conecta y autentica correctamente.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Coban para el GPS403, como comandos SMS o la herramienta del proveedor indicada en el manual del dispositivo.
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138 según los ajustes del servidor.
3. Establezca el puerto en 8888, que es el puerto único que Plaspy utiliza para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Configure el APN y las credenciales APN para que el rastreador pueda iniciar sesiones de datos GPRS.
6. Aplique o guarde la configuración y, si es necesario, reinicie o haga un ciclo de alimentación del dispositivo para activar los cambios.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación del dispositivo o confirmando que el equipo aparece en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GPS403 puede configurarse enviando comandos SMS. Los comandos a continuación están en el orden comúnmente usado para la configuración inicial. La contraseña por defecto en estos ejemplos es 123456. Reemplace los marcadores como {{apn}}, {{apnu}} y {{apnp}} por el APN, usuario APN y contraseña APN de su operador respectivamente.

- Reinicio de fábrica opcional inicial (use solo cuando sea necesario para una configuración limpia)
```text
begin123456
```

- Establecer la zona horaria a UTC 0
```text
time zone123456 0
```

- Establecer el APN del operador (reemplace {{apn}} por el APN de su operador móvil)
```text
apn123456 {{apn}}
```

- Establecer usuario y contraseña del APN (reemplace los marcadores según sea necesario)
```text
up123456 {{apnu}} {{apnp}}
```

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```

- Establecer el intervalo de actualización de posición (ejemplo de comando para patrón de fixes periódicos)
```text
fix060s060s***n123456
```

- Cambiar el rastreador a modo GPRS y establecer transporte a UDP o TCP según soporte
```text
gprs123456,1,1
```
O un comando simple de modo GPRS si esa forma es aceptada por el dispositivo:
```text
gprs123456
```

- Consultar la configuración actual en el dispositivo
```text
check123456
```

- Habilitar reporte de protocolo extendido para combustible o estado de sensores digitales
```text
protocol123456 18
```

Notas sobre los marcadores y la contraseña:
- {{apn}} es el APN del operador móvil requerido para datos GPRS.
- {{apnu}} y {{apnp}} son el usuario y la contraseña del APN, cuando el operador los proporciona.
- Mantenga la contraseña por defecto 123456 a menos que la guía de administración del dispositivo indique cambiarla. Modifique contraseñas como parte de las buenas prácticas de seguridad cuando el dispositivo lo permita.

## Observaciones sobre la configuración

- La configuración por SMS es de uso común en los dispositivos Coban, pero también puede haber herramientas del proveedor o software local; siga el método que se ajuste a su flujo de trabajo de instalación.
- Diferentes versiones de firmware o revisiones de hardware pueden aceptar sintaxis de comando ligeramente distintas; siempre confirme la sintaxis exacta con el manual del dispositivo.
- Elija UDP o TCP según la estabilidad de la red y las recomendaciones del operador. Plaspy soporta ambos y detecta automáticamente el protocolo entrante.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que solo debe establecer ese puerto al apuntar los dispositivos al endpoint de Plaspy.
- Use el comando check para verificar los ajustes antes de dar por concluida la instalación.

## Por qué usar Plaspy con esta configuración

Configurar el Coban GPS403 para que reporte a Plaspy ofrece un camino eficiente hacia la visibilidad de la flota, el reporte de eventos y el monitoreo operativo. La combinación de los comandos SMS/GPRS de Coban, conocidos y probados, con los ajustes del servidor Plaspy permite que instaladores y gestores de flota pongan los dispositivos en línea rápidamente y validen la conectividad.

Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y orientación del fabricante, verifique los detalles en la documentación oficial de Coban en https://www.coban.net/.
