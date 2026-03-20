---
slug: /neomatica/adm500/configuration
id: adm500-configuration
sidebar_label: Configuration
title: Neomatica - ADM500 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Neomatica ADM500 setup with Plaspy including server settings and practical workflow
keywords:
  - Neomatica ADM500 configuration
  - ADM500 setup Plaspy
  - Neomatica ADM500 server configuration
  - ADM500 GPS tracker setup
  - Plaspy tracker configuration
  - ADM500 telematics setup
  - ADM500 integration guide
  - Neomatica ADM500 tracking software
  - vehicle tracking ADM500
  - ADM500 platform setup
---

# Neomatica - ADM500 Configuration

This page documents the public configuration context for using the Neomatica ADM500 GPS tracker with Plaspy. It summarizes the shared server settings Plaspy requires, explains the typical steps to prepare the ADM500 for platform integration, and highlights practical checks to validate connectivity and visibility in Plaspy. This guidance is based on public integration practices and the ADM500 device description.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to apply the public Plaspy connection settings to the ADM500, and consult Neomatica documentation or vendor tools for device-specific UI commands and firmware behavior.

## Configuration Overview

Preparing the ADM500 for Plaspy involves configuring the device to report its location and telemetry to the Plaspy server endpoint, ensuring network connectivity, and confirming the unit appears in the platform. The ADM500's cellular connectivity, dual SIM support, and flexible configuration interfaces (Windows/Android tools, SMS, server commands, Bluetooth) allow several practical setup workflows.

- Set the ADM500 to report to the Plaspy server endpoint using the shared Plaspy settings (d.plaspy.com or 54.85.159.138 on port 8888).
- Choose the transport protocol the device supports (UDP or TCP) and set the device to use port 8888 for Plaspy.
- Validate cellular connectivity and APN settings so packets can reach Plaspy reliably from the ADM500.
- Apply configuration and restart the device when required so it starts reporting to Plaspy/server.
- Confirm the device is visible in Plaspy; Plaspy will automatically detect the device protocol and process incoming messages.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the ADM500:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP are both supported by the device and Plaspy
- Plaspy will automatically detect the correct tracker protocol when the device connects

Note that all devices in Plaspy use the same port and that Plaspy's automatic protocol detection simplifies device onboarding once the correct server and transport are configured.

## Typical Requirements Before Setup

- Ensure the ADM500 is powered and the internal backup battery is charged or the vehicle power is connected.
- Insert a working nanoSIM with a data plan and confirm cellular registration for LTE/GPRS connectivity.
- Have access to the official Neomatica configuration method or software (Windows or Android configurator, SMS commands, or manufacturer-provided tools).
- Know the device IMEI or identifier so you can match the physical unit to records in Plaspy.
- Confirm APN and account details for the mobile operator are available for the SIM in use.
- If using Bluetooth or local configuration, have a compatible device and the Neomatica app or configurator available.

## How This Tracker Connects to Plaspy

The ADM500 sends standardized location and telemetry packets over the cellular network to the shared Plaspy server endpoint and port. Once the device is configured to use the Plaspy server, Plaspy receives live coordinates, sensor telemetry, and event messages to populate dashboards, alerts, and reports.

- The ADM500 reports GNSS position and movement data to d.plaspy.com or 54.85.159.138 on port 8888.
- The device can use UDP or TCP for transport; select the transport supported or preferred in your environment.
- Plaspy automatically detects the tracker protocol and parses incoming packets for live monitoring.
- Telemetry such as ignition, analog inputs, fuel sensor readings, and BLE sensor data are forwarded to Plaspy when configured to do so.
- Events and alarms sent by the device are processed by Plaspy for alerting and historical logging.

## Common Configuration Workflow

1. Access the official Neomatica configuration method or software (Windows/Android configurator, SMS, or server commands) for the ADM500.
2. In the device server settings, enter the Plaspy server as either d.plaspy.com or 54.85.159.138 depending on your configuration tool.
3. Set the server port to 8888 as the target port for Plaspy.
4. If the ADM500 requires a transport selection, choose UDP or TCP according to your preference or network requirements.
5. Save or apply the configuration in the device tool and, if applicable, send any required server command to write settings to the device.
6. Restart the ADM500 if the configuration method or device prompts a reboot to activate the new server settings.
7. Validate that the ADM500 reports to Plaspy and is visible in the platform; confirm the device appears and is sending location updates.

## Example Configuration Commands

The exact commands and syntax to configure the ADM500 vary by Neomatica firmware, the chosen configuration method, and the vendor's tools. Many ADM500 units are configured using the Windows or Android configurator, SMS commands, or server-side commands. When using a configurator or SMS, set the server address to d.plaspy.com or 54.85.159.138 and the port to 8888, and select UDP or TCP as needed. Plaspy will then detect the protocol automatically.

If you require command examples, refer to the official Neomatica documentation or the vendor tool you are using for exact command formats and examples specific to your firmware revision.

## Configuration Notes

- Device firmware versions and vendor configurator revisions can change command syntax and available fields; always check the Neomatica documentation for your firmware.
- Use UDP or TCP based on network reliability and the device configuration tool; both transports are supported by Plaspy on port 8888.
- Dual SIM setups on the ADM500 can improve reliability; ensure APN settings are correct for the primary and backup SIM.
- For over the air or SMS configuration, confirm the device accepts remote commands in its current firmware state.
- Plaspy uses the same port for all supported devices and automatically detects the protocol, which simplifies multi-model deployments.

## Why Use Plaspy with This Configuration

Configuring the Neomatica ADM500 to report to Plaspy gives organizations a straightforward path to real-time visibility, event monitoring, and consolidated telemetry for fleets and assets. The ADM500’s multi-constellation GNSS, sensor integration, and dual SIM resilience complement Plaspy’s unified server endpoint and automatic protocol detection, enabling reliable tracking and streamlined onboarding.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware notes, and manufacturer details, verify information on the Neomatica website https://neomatica.com/.
