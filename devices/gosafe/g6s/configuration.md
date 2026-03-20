---
slug: /gosafe/g6s/configuration
id: g6s-configuration
sidebar_label: Configuration
title: Gosafe - G6S Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gosafe G6S compatibility with Plaspy server settings and practical setup steps
keywords:
  - Gosafe G6S configuration
  - Gosafe G6S setup
  - Gosafe G6S Plaspy
  - Gosafe GPS tracker configuration
  - G6S server configuration
  - G6S fleet tracking setup
  - Gosafe device integration
  - vehicle tracking G6S
  - G6S telemetry setup
  - Gosafe configuration guide
---

# Gosafe - G6S Configuration

This page covers the public configuration context for using the Gosafe G6S tracker with Plaspy. It explains the shared server values and practical steps that are commonly required to point a G6S device at Plaspy for monitoring and fleet visibility. Use this guide to understand the required server settings and the typical workflow needed to get a G6S reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The G6S supports quad band GSM GPRS connectivity, over the air device management, and FOTA, which can affect how you apply configuration changes depending on the device firmware and provisioning approach.

## Configuration Overview

The goal of the configuration process is to prepare the G6S so it reliably connects to Plaspy and reports location and event data for fleet monitoring and operational oversight. Below are the practical outcomes you should aim for when configuring the device.

- Configure the G6S network endpoint to point at the Plaspy server so telemetry will be received by the platform.
- Ensure transport settings use either UDP or TCP as required by your device firmware and network environment.
- Validate connectivity and that the device IMEI or identifier is known so it can be linked in Plaspy.
- Save and apply configuration and use the device management tools to confirm reports arrive at Plaspy.
- Keep firmware and device management settings aligned with the manufacturer guidance to support FOTA and OTA management.

## Plaspy Server Settings

Use the following Plaspy settings when configuring the Gosafe G6S. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so these values are consistent across devices.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP as required by the device
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Device is powered and installed in the vehicle or test bench with a stable power source.
- A valid SIM card and active data plan appropriate for GSM GPRS operation if the device requires cellular data.
- Access to the official Gosafe configuration method or software for the G6S provided by the vendor or installer.
- Knowledge of the device IMEI or unique identifier for registration in your Plaspy account.
- Confirmation of current device firmware level, since FOTA and OTA management can change configuration steps.
- Access to network connectivity and the ability to allow outbound traffic to the Plaspy server endpoint.

## How This Tracker Connects to Plaspy

When configured for Plaspy the Gosafe G6S is set to report telemetry and status to the shared Plaspy server endpoint and port. Plaspy receives the reports and maps the device identifier to the corresponding asset in the platform so location, events, and alerts become visible.

- Set the device server address to d.plaspy.com or 54.85.159.138 so traffic is routed to Plaspy.
- Use port 8888 for all device data sent to Plaspy since the platform uses a single port for supported devices.
- Choose UDP or TCP transport as required by the device or network environment; Plaspy supports both.
- Plaspy automatically detects the incoming tracker protocol so the same server settings work for multiple tracker types.
- Once the device reports, Plaspy processes position updates, status messages, and event reports for monitoring and dispatch.

## Common Configuration Workflow

1. Access the official Gosafe G6S configuration method or software provided by the manufacturer or vendor.
2. In the device server settings enter d.plaspy.com or, if required, enter 54.85.159.138 as the server IP.
3. Set the server port to 8888 which is used across Plaspy for all devices.
4. Choose UDP or TCP transport if the device firmware requires an explicit selection.
5. Apply or save the device configuration according to the manufacturer procedure.
6. Restart or power cycle the device if the manufacturer instructions indicate a restart is required for changes to take effect.
7. Validate that the G6S device is reporting to Plaspy and that the device identifier appears in the Plaspy platform.

## Example Configuration Commands

The exact commands or SMS formats used to configure a Gosafe G6S can vary by firmware version and the manufacturer supplied tools. Some installers use a web interface, some use SMS command strings, and others use an OTA provisioning server. Because models and firmware differ, confirm command formats with Gosafe documentation or your vendor. Plaspy requires the device to be pointed to d.plaspy.com or 54.85.159.138 on port 8888 and supports UDP or TCP transport.

## Configuration Notes

- Firmware differences can change how commands are entered or how server fields are named in the configuration interface. Verify the exact fields for your G6S firmware.
- Choose UDP or TCP transport based on your network and reliability needs; Plaspy supports both and will detect protocol automatically.
- Use the device over the air management features and FOTA cautiously during configuration to avoid unexpected changes to server settings.
- Hardware features such as GSM jamming detection and up to 28 geo fences are part of the G6S capabilities and should be configured per manufacturer guidance.
- Always cross reference any SMS or command based configuration with the official Gosafe documentation to ensure command syntax is correct.

## Why Use Plaspy with This Configuration

Using the Gosafe G6S with Plaspy enables organizations to centralize vehicle location, event reporting, and basic operational telemetry in a single fleet management platform. Pointing the G6S to the shared Plaspy server endpoint simplifies provisioning because Plaspy uses the same port for all devices and automatically detects the tracker protocol, reducing per device protocol selection tasks.

To learn more about Plaspy and how it can work with the Gosafe G6S visit https://www.plaspy.com and verify current device specific setup and firmware details on the manufacturer website https://gosafesystem.com/ . Manufacturer specifications and provisioning methods can change over time so confirm the latest instructions on the official Gosafe resources.
