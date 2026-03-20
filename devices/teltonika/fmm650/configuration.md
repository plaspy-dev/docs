---
slug: /teltonika/fmm650/configuration
id: fmm650-configuration
sidebar_label: Configuration
title: Teltonika - FMM650 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guidance for connecting a Teltonika FMM650 to Plaspy using shared server settings and example commands
keywords:
  - Teltonika FMM650 configuration
  - FMM650 setup for Plaspy
  - Teltonika server configuration
  - FMM650 GPS platform setup
  - Teltonika tracker configuration guide
  - fleet tracking FMM650
  - Plaspy tracker integration
  - vehicle telematics setup
  - FMM650 APN and server settings
  - Teltonika SMS configuration
---

# Teltonika - FMM650 Configuration

This page documents the public configuration context for using the Teltonika FMM650 with Plaspy. It collects practical server settings, preparatory steps, and an example SMS batch command published for basic parameter setup so you can direct the device to Plaspy for real time tracking and telemetry ingestion.

The guidance below reflects Plaspy's shared server settings and automatic protocol detection used across supported trackers. Manufacturer-side setup steps for the FMM650 can vary by firmware, hardware revision, installation type, and vendor tools. The FMM650 supports multiple configuration methods (including SMS batch commands shown below and Teltonika configuration tools), so validate details against the device firmware and official Teltonika documentation when needed.

## Configuration Overview

Configuring the FMM650 for Plaspy prepares the device to send position and vehicle telemetry to the Plaspy platform and ensures the device is visible and manageable within your account. The process focuses on setting network access, target server, transport, and saving the configuration so Plaspy can automatically detect and interpret the tracker protocol.

- Set APN credentials so the device has mobile data access if required by your installation.
- Point the device to the Plaspy server using the provided domain or IP and the shared platform port.
- Choose the transport protocol (UDP or TCP) if the device interface requires it.
- Save and apply settings, then validate the device reports to Plaspy and appears in your fleet view.
- Use Teltonika tools or SMS batch commands for bulk or remote configuration when applicable.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices use the same port for platform ingestion

## Typical Requirements Before Setup

- A powered FMM650 with access to the device configuration interface or SMS control channel.
- An active cellular data SIM configured with correct APN, username, and password where required by your network.
- Access to Teltonika configuration tools or the ability to send SMS batch commands if using remote SMS setup.
- Physical or remote access to restart the device after applying configuration changes if the install requires a reboot.
- Credentials or account access to Plaspy so you can verify the device appears and reports correctly.
- Knowledge of any site specific installation constraints such as antenna placement and vehicle wiring practices.

## How This Tracker Connects to Plaspy

When configured, the FMM650 reports GNSS positions and vehicle telemetry to the shared Plaspy server endpoint and port. Plaspy ingests telemetry, device status, and events so fleet operators can monitor vehicles, view tachograph and CAN/J1939 data where available, and act on alerts.

- The device is configured to report to d.plaspy.com (or 54.85.159.138) on port 8888 so Plaspy receives GPS and telemetry feeds.
- Position updates are delivered to Plaspy and rendered in the platform for real time visibility.
- CAN and J1939 telemetry, tachograph streams, and serial sensor data are forwarded to Plaspy where supported by the installation.
- Device status such as backup battery and connectivity state is visible in Plaspy for operational monitoring.
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol by hand in the platform.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software (for example Teltonika Configurator, FOTA tools, or SMS batch commands).
2. Enter the Plaspy server endpoint as either d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP if the device requires transport selection during configuration.
5. Provide APN, APN username, and APN password as required by your mobile operator.
6. Apply or save the configuration changes to the device.
7. Restart the device if required by the chosen configuration method or firmware.
8. Validate that the device reports to Plaspy and appears correctly within your Plaspy fleet view.

## Example Configuration Commands

The following example is a published Teltonika SMS batch command for basic parameter setup. It illustrates setting APN fields and directing the device to Plaspy. Preserve the placeholders when you substitute your operator values.

- SMS batch command example
```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Notes on the command
  - {{apn}} is a placeholder for your mobile operator APN.
  - {{apnu}} is a placeholder for the APN username when required.
  - {{apnp}} is a placeholder for the APN password when required.
  - The command includes d.plaspy.com and port 8888 so the device is pointed to the Plaspy server.
  - Parameter 2006 is present in the example command; confirm the correct value for transport selection or other flags with Teltonika documentation or tooling before use.
  - You can use the domain d.plaspy.com as shown or replace it with the Plaspy server IP 54.85.159.138 if a numeric endpoint is required by your configuration method.

Always verify the exact parameter mapping for your device firmware version using official Teltonika documentation or the Teltonika Configurator tool before sending SMS commands.

## Configuration Notes

- Firmware differences can change parameter numbering and available options; always check the FMM650 firmware release notes for changes that affect configuration.
- Teltonika supports multiple configuration channels (SMS, Configurator, FOTA WEB). Use the method that matches your deployment and installer workflow.
- Choose UDP or TCP based on your network requirements and confirm the correct transport value with Teltonika documentation or support.
- Applying configuration remotely via SMS is convenient for deployed assets, but confirm that SMS commands are supported and that the device accepts batch SMS commands on your firmware.
- Keep a record of APN credentials, server values, and any device-specific flags used during configuration to simplify troubleshooting and mass deployments.

## Why Use Plaspy with This Configuration

Using the FMM650 with Plaspy provides centralized visibility of vehicle location, CAN and tachograph telemetry, and device status across heavy fleet assets. The shared Plaspy server settings simplify device provisioning because the platform uses the same port and automatic protocol detection for supported trackers, reducing per-device platform configuration overhead.

Learn more about Plaspy and how it integrates with trackers like the Teltonika FMM650 at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and parameter mappings, verify details on the manufacturer website https://www.teltonika-gps.com/ as vendor documentation may change over time.
