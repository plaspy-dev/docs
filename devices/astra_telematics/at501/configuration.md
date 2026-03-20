---
slug: /astra_telematics/at501/configuration
id: at501-configuration
sidebar_label: Configuration
title: Astra Telematics - AT501 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Astra Telematics AT501 configuration with Plaspy server settings and example SMS commands for integration
keywords:
  - Astra Telematics AT501
  - AT501 configuration
  - AT501 setup for Plaspy
  - Astra AT501 server configuration
  - AT501 GPS tracker setup
  - AT501 Plaspy integration
  - asset tracker configuration guide
  - asset tracking AT501
  - AT501 SMS configuration
  - AT501 BLE provisioning
---

# Astra Telematics - AT501 Configuration

This page covers the public configuration context for using the Astra Telematics AT501 Mini Asset Tracker with Plaspy. It explains the shared server settings Plaspy expects, outlines practical setup steps, and shows the example SMS commands that are used publicly to point an AT501 at Plaspy. Use this guide to prepare the device for registration and visibility in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware revision, hardware revision, installation type, and vendor tools. The AT501 supports local provisioning channels such as BLE and manufacturer configuration methods, and the AT501 can also be configured by SMS commands as shown below.

## Configuration Overview

Preparing the AT501 for Plaspy involves telling the device which APN to use for cellular data and which server and port to send telemetry to. The practical goal is to ensure the tracker can establish a GPRS/LTE uplink and report position and event data reliably to Plaspy.

- Configure the device APN and optional APN credentials so it can reach the cellular network.
- Point the device to the Plaspy server endpoint and confirm port and transport settings.
- Validate connectivity from the tracker to Plaspy and confirm the device appears in the platform.
- Use BLE or SMS provisioning for on site setup depending on your installer tools and firmware.
- Test event and motion reporting to verify that scheduled and accelerometer triggered messages arrive at Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and it will automatically detect the correct protocol used by the tracker.

## Typical Requirements Before Setup

- A powered AT501 with a charged or installed replaceable battery pack and access to the unit for provisioning.
- A valid cellular connection for the device using its e SIM or operator subscription and correct APN settings.
- Access to the manufacturer configuration method you plan to use such as BLE provisioning tools or SMS setup.
- A phone or tool capable of sending SMS commands to the device if you choose SMS provisioning.
- The device firmware and hardware revision documented so you can follow the correct manufacturer instructions and commands.
- Confirmation of the target Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) before saving configuration.

## How This Tracker Connects to Plaspy

The AT501 sends scheduled and event-based uplinks over its cellular connection to the Plaspy server endpoint. Once pointed at Plaspy, the device will report location and telemetry to the shared Plaspy endpoint and appear in the platform for monitoring and alerts.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport may be configured as UDP or TCP depending on installer preference or firmware options; Plaspy will accept either.
- Plaspy automatically detects the tracker protocol so the server can accept appropriate messages from the AT501.
- Reports include scheduled position updates and event driven telemetry such as movement alerts triggered by the accelerometer.
- Successful configuration is validated by confirming the device becomes visible and reporting in the Plaspy platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the AT501 such as BLE provisioning tools or the SMS setup method described in manufacturer documentation.
2. Enter the Plaspy server address as either the domain d.plaspy.com or the IP 54.85.159.138 in the server or GPRS settings screen.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP transport if the device requires a transport selection for uplinks.
5. Set APN and optional APN username and password so the tracker can establish cellular data connectivity.
6. Apply or save the configuration and restart the device if the manufacturer instructions recommend a reboot.
7. Validate that the device reports to Plaspy by checking visibility and telemetry arrival in the Plaspy platform.

## Example Configuration Commands

The AT501 supports SMS based configuration using the following publicly documented commands. Send these commands as text messages to the device number in the order required by your setup process. Placeholders are preserved for APN values and should be replaced with your operator APN and credentials.

- Set the operator APN
```text
$APAD,{{apn}}
```
Replace {{apn}} with your cellular operator APN. This command configures the device data APN.

- Set the APN username (optional)
```text
$APUN,{{apnu}}
```
Replace {{apnu}} with the APN username if required by your operator. Omit if not needed.

- Set the APN password (optional)
```text
$APPW,{{apnp}}
```
Replace {{apnp}} with the APN password if required by your operator. Omit if not needed.

- Set the GPRS server to Plaspy by IP
```text
$IPAD,54.85.159.138
```
This points the tracker directly at the Plaspy server IP. Alternatively use the domain d.plaspy.com in your manufacturer tool if it supports domain names.

- Set the server port for Plaspy
```text
$PORT,8888
```
All Plaspy devices use port 8888. Configure this port regardless of transport choice.

Notes on placeholders
- {{apn}} is the cellular access point name for your SIM operator.
- {{apnu}} and {{apnp}} are optional APN username and password values used by some operators.

## Configuration Notes

- Firmware and hardware revisions can change command formats or provisioning procedures; always confirm with the AT501 vendor documentation before applying commands.
- The device supports both UDP and TCP transport options; choose the transport your deployment and firmware recommend. Plaspy accepts both and auto detects protocol.
- SMS based setup is a supported public option shown here, but many installers will prefer BLE or vendor software for bulk provisioning and diagnostics.
- When using the domain d.plaspy.com some tools prefer the IP 54.85.159.138; both are publicly supported by Plaspy.
- Apply configuration and then validate reporting in Plaspy to ensure the tracker is visible and telemetry is arriving as expected.

## Why Use Plaspy with This Configuration

Using the AT501 with Plaspy gives organizations a practical way to collect long term asset telemetry and receive movement based alerts without frequent maintenance. The AT501's low power design, event driven reporting, and multi network cellular uplink combine with Plaspy's shared server endpoint to provide consistent data flow for asset visibility and fleet management workflows.

Learn more about Plaspy and how it integrates with supported trackers by visiting https://www.plaspy.com. Please verify the latest AT501 configuration methods, firmware behavior, and manufacturer instructions at the Astra Telematics website https://astratelematics.com/ since device specific steps and commands can change over time.
