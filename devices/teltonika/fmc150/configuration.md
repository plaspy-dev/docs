---
slug: /teltonika/fmc150/configuration
id: fmc150-configuration
sidebar_label: Configuration
title: Teltonika - FMC150 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Teltonika FMC150 for use with Plaspy including server values commands and a practical workflow
keywords:
  - Teltonika FMC150 configuration
  - Teltonika FMC150 setup
  - Teltonika FMC150 Plaspy
  - FMC150 server configuration
  - FMC150 tracking software configuration
  - Teltonika tracker configuration
  - vehicle GPS tracker setup
  - FMC150 telemetry configuration
  - Plaspy tracker setup
  - fleet management tracker
---

# Teltonika - FMC150 Configuration

This page documents the public configuration context for using the Teltonika FMC150 with Plaspy. It focuses on the server settings, workflow, and the example commands that are commonly used to prepare FMC150 devices for reporting to Plaspy. Use this information to apply the shared Plaspy settings to your device and validate connectivity before completing a full deployment.

Plaspy uses the same shared server settings across supported trackers and automatically detects the tracker protocol, but manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The FMC150 supports standard Teltonika configuration methods and the model configuration example below shows a typical command used to set APN and Plaspy server values.

## Configuration Overview

This configuration process prepares the FMC150 to send location and CAN-derived telemetry to Plaspy by assigning the Plaspy endpoint and required network parameters. The goal is to ensure the device can establish an outbound connection to Plaspy and that the platform receives the expected messages for visibility and monitoring.

- Apply Plaspy server details to the FMC150 so it reports to the correct host and port.
- Configure the device APN and authentication placeholders so cellular connectivity is available.
- Select a transport mode (UDP or TCP) if the device requires an explicit choice.
- Save and apply settings, then verify the device appears in Plaspy and transmits telemetry.
- Use the example setparam command if you configure via SMS or a Teltonika provisioning tool.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the FMC150 may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered FMC150 device installed or accessible for configuration.
- Active cellular connectivity on the device and a configured APN for your operator.
- Access to the Teltonika configuration method you use (SMS commands, Teltonika configurator, or provisioning tool).
- Credentials or permissions to change device settings and to restart the unit if required.
- Knowledge of whether your deployment requires UDP or TCP transport selection on the device.
- Access to Plaspy account or platform administrator to confirm the device becomes visible after configuration.

## How This Tracker Connects to Plaspy

When configured, the FMC150 sends its GNSS positions and CAN-derived telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest, parse, and display the data in dashboards and reports.

- The device is configured with d.plaspy.com or the equivalent Plaspy server IP to direct outbound traffic to Plaspy.
- The tracker uses port 8888 for all communications with Plaspy.
- Choose UDP or TCP on the FMC150 if the device requires an explicit transport selection; Plaspy supports both.
- Plaspy automatically detects the tracker protocol and maps inbound messages without per-device port changes.
- After successful connection, Plaspy receives position and telemetry messages for real time tracking, alerts, and historical reporting.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software you use for the FMC150 such as SMS provisioning or the Teltonika configurator.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server host field.
3. Set the device port to 8888 as the outbound port for Plaspy communication.
4. Choose UDP or TCP if the FMC150 requires a transport selection.
5. Provide cellular APN settings and any required APN username or password placeholders before saving.
6. Apply or save the configuration and restart the unit if required by your workflow.
7. Validate that the FMC150 reports to Plaspy and appears within the platform with expected telemetry.

## Example Configuration Commands

To configure basic parameters on the FMC150 using a Teltonika style setparam command, use the public command below. This command sets APN values and Plaspy server fields. Preserve the placeholders and replace them with your operator details where required.

- Example setparam command for APN and Plaspy server configuration

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders and fields
  - {{apn}} — replace with your cellular APN name
  - {{apnu}} — replace with APN username if required by the carrier; leave empty if not required
  - {{apnp}} — replace with APN password if required by the carrier; leave empty if not required
  - 2004 field sets the server domain to d.plaspy.com
  - 2005 field sets the server port to 8888
  - 2006 field commonly indicates the transport or activation flag depending on Teltonika firmware; check your device documentation or configurator for exact semantics

This command is typically sent with an SMS to the device or applied via Teltonika provisioning tools depending on your setup. Do not change the order of the parameters if your provisioning tool expects a specific sequence.

## Configuration Notes

- Firmware differences can change parameter IDs and command behavior; always verify the parameter mapping for your specific FMC150 firmware revision.
- Installer practice varies by region and SKU; confirm whether your device variant requires additional APN or network settings for 4G LTE Cat 1 and 2G fallback.
- Choose between UDP and TCP based on your network conditions and the device firmware support; Plaspy accepts either on port 8888.
- SMS provisioning and Teltonika configurator tools are both common ways to apply these settings; use the method that matches your operational procedures.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, which simplifies multi-model fleet deployments.

## Why Use Plaspy with This Configuration

Using the FMC150 with Plaspy brings CAN-level telemetry and GPS position data into a centralized platform for fleet monitoring, maintenance planning, and operational oversight. The shared Plaspy server settings simplify provisioning across many devices, while Plaspy’s automatic protocol detection reduces per-device configuration complexity.

Learn more about Plaspy and how it integrates with compatible trackers at https://www.plaspy.com. For the latest device specific configuration methods firmware notes and official parameter references verify information on the manufacturer website https://www.teltonika-gps.com/.
