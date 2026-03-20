---
slug: /autofon/e_mayak_31/configuration
id: e_mayak_31-configuration
sidebar_label: Configuration
title: AutoFon - E-Mayak 3.1 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure AutoFon E-Mayak 3.1 for use with Plaspy using shared server settings and SMS integration
keywords:
  - AutoFon E-Mayak 3.1 configuration
  - AutoFon E-Mayak setup
  - AutoFon E-Mayak Plaspy
  - E-Mayak 3.1 GPS tracker configuration
  - Plaspy server configuration
  - Plaspy tracker integration
  - SMS GPS tracker setup
  - vehicle tracking configuration
  - asset tracking E-Mayak
  - GPS tracker SMS integration
---

# AutoFon - E-Mayak 3.1 Configuration

This page documents the public configuration context for using the AutoFon E-Mayak 3.1 tracker with Plaspy. It focuses on practical steps and the shared server settings required to integrate the E-Mayak 3.1 into Plaspy workflows. The E-Mayak 3.1 is an SMS first tracker intended for long autonomous operation and uses SMS messages to report position and telemetry that can be forwarded into Plaspy for visualization and reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact steps performed on the manufacturer side can vary with firmware revision, hardware version, installation type, or vendor configuration tools. This page explains the public Plaspy server values and practical integration approaches for the SMS driven E-Mayak 3.1 while encouraging verification of device specific commands and behavior with the manufacturer documentation.

## Configuration Overview

The goal of configuration for E-Mayak 3.1 is to prepare the tracker and any intermediary SMS gateway or forwarding tool so device SMS messages are ingested by Plaspy and shown in the platform. Because this model reports primarily by SMS rather than continuous GPRS telemetry, integration typically uses manual forwarding, an SMS gateway, or a small gateway service that posts SMS content into Plaspy.

- Configure the device and any SMS gateway to forward position and telemetry messages into Plaspy.
- Ensure the device can send the required SMS messages and that the SIM has outgoing SMS capability.
- Validate that forwarded messages arrive at the Plaspy endpoint for parsing and mapping.
- Confirm heartbeat and telemetry messages are received so the device shows as active in Plaspy.
- Test a recovery or on-demand location request flow to verify end to end visibility in the platform.

## Plaspy Server Settings

Use these public Plaspy connection details when configuring your gateway or IP capable device settings. Plaspy uses the same port for all supported devices and protocol detection is automatic in the platform.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that E-Mayak 3.1 is SMS first. When SMS messages are forwarded into Plaspy by a gateway or relay service, that service will use the domain or IP and port above to deliver data into the Plaspy ingestion endpoint.

## Typical Requirements Before Setup

- A powered AutoFon E-Mayak 3.1 with batteries installed and the device responsive to SMS commands.
- A SIM card in the device with outgoing SMS enabled and sufficient balance for command and reporting messages.
- Access to the official AutoFon configuration method or software for the E-Mayak 3.1 such as SMS command interface and the device PIN if required.
- A plan for how SMS messages will reach Plaspy, for example an SMS to HTTP API gateway or manual forwarding process.
- GSM network coverage at the installation location sufficient to send and receive SMS messages.
- The owner number and configuration PIN to allow changes to device settings and forwarding parameters.

## How This Tracker Connects to Plaspy

Because the E-Mayak 3.1 reports primarily over SMS, integration with Plaspy typically routes SMS content into Plaspy rather than the tracker directly opening a persistent IP session. In integrated setups an SMS gateway or forwarding service posts the parsed SMS content to the Plaspy server endpoint and port.

- The device sends GPS coordinates and telemetry by SMS following the manufacturer message formats.
- SMS messages can be forwarded by an SMS gateway or service to Plaspy using d.plaspy.com or 54.85.159.138 and port 8888.
- Heartbeat and status SMS messages are used to track device health in Plaspy dashboards.
- Security and telemetry SMS such as battery alerts or PIN events are parsed by Plaspy when forwarded.
- When an IP capable intermediary is involved, UDP or TCP may be selected on port 8888 to deliver parsed messages to Plaspy and Plaspy will auto detect the protocol.

## Common Configuration Workflow

1. Access the official AutoFon configuration method or SMS command interface for the E-Mayak 3.1 using the documented PIN and commands from the manufacturer.
2. Configure where SMS messages will be forwarded or how they will be collected for ingestion into Plaspy. Enter d.plaspy.com or 54.85.159.138 as the destination in your SMS gateway or forwarding tool.
3. Set the destination port to 8888 in the gateway or relay settings and select UDP or TCP if the forwarding tool requires a transport selection.
4. Apply or save the configuration in the gateway, relay, or device configuration tool.
5. Restart the gateway, relay service, or the device if the manufacturer instructions require a restart for changes to take effect.
6. Send a test location or request an on demand position from the E-Mayak 3.1 and verify the message is received and parsed by Plaspy.
7. Confirm the device appears as active in Plaspy and that telemetry such as battery and heartbeat messages are logged.

## Example Configuration Commands

The E-Mayak 3.1 is configured primarily by SMS commands using the official AutoFon syntax and a configuration PIN. Exact SMS commands and sequences vary by firmware and are provided by AutoFon in their product documentation. Because manufacturer commands are not included here, consult the AutoFon user manual for the precise SMS commands to change report targets, owner numbers, or PIN protected settings.

If you are using an SMS to API gateway to relay messages into Plaspy, configure the gateway to POST or forward the parsed SMS to the Plaspy endpoint at d.plaspy.com port 8888 using either UDP or TCP according to your gateway capability. Plaspy will automatically detect the tracker protocol on receipt.

## Configuration Notes

- The E-Mayak 3.1 is SMS first and does not provide continuous GPRS telemetry. Integration with Plaspy normally uses an SMS forwarding approach or manual entry.
- Firmware and message formats can vary by production batch or vendor tools. Verify SMS command syntax and available features against the official AutoFon documentation.
- When configuring a gateway to forward messages to Plaspy choose UDP or TCP on port 8888 according to the gateway capabilities. Plaspy uses the same port for all devices and handles protocol detection automatically.
- Keep the device PIN and owner number information secure. PIN protected commands are part of the device security model.
- Check SIM balance and outgoing SMS capability before final validation to prevent missed messages during testing.

## Why Use Plaspy with This Configuration

Using the AutoFon E-Mayak 3.1 with Plaspy provides a practical solution for long term, low maintenance tracking scenarios where battery life and concealment are priorities. For assets and situations that tolerate on-demand location checks and SMS based telemetry, forwarding E-Mayak 3.1 messages into Plaspy delivers mapping, logging, and simple operational oversight without continuous data connections.

Learn more about Plaspy and how it can ingest SMS based device messages at https://www.plaspy.com. For the most current device specific commands, firmware details, and configuration procedures for the E-Mayak 3.1 please verify the latest information on the manufacturer site https://www.autofon.ru/.
