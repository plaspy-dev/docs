---
slug: /ruptela/asset5/configuration
id: asset5-configuration
sidebar_label: Configuration
title: Ruptela - Asset5 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for using the Ruptela Asset5 tracker with Plaspy server settings and setup steps
keywords:
  - Ruptela Asset5 configuration
  - Ruptela Asset5 setup
  - Plaspy Asset5 integration
  - Asset5 server configuration
  - Asset5 GPS tracker setup
  - Ruptela tracker Plaspy
  - Asset5 tracking software configuration
  - Asset5 GPS platform setup
  - Asset5 BLE configuration
  - Asset5 battery life monitoring
---

# Ruptela - Asset5 Configuration

This page describes the public configuration context for using the Ruptela Asset5 tracker with the Plaspy platform. It focuses on the shared server settings, required preparation, and practical steps you will typically follow to send Asset5 telemetry and location data to Plaspy for real time tracking and historical reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, however exact manufacturer-side setup steps can vary by firmware release, hardware revision, installation type, and the vendor tools you use. Use this guide to prepare Asset5 for Plaspy and then verify final device behavior against the official Ruptela documentation and your device firmware.

## Configuration Overview

Preparing Asset5 for Plaspy is about making sure the device can reach Plaspy’s server endpoint and report GNSS fixes, motion events, and health telemetry so the asset becomes visible in the platform. The configuration process aligns device networking settings with Plaspy’s shared endpoint and verifies that reports arrive on the platform.

- Set the device server or APN destination to the Plaspy server so telemetry is routed correctly.
- Choose the transport protocol (UDP or TCP) if the device requires an explicit transport selection.
- Confirm the device is able to register on the cellular network and has the required power or batteries installed.
- Validate that movement and telemetry events (GNSS, accelerometer, battery) are reported and visible in Plaspy.
- Use local BLE configuration via the mDMP app if available for convenience during installation and testing.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Asset5 powered with fresh or charged batteries and any required mounting completed.
- A SIM or cellular provision appropriate for your Asset5 variant and regional coverage if your device uses cellular connectivity.
- Access to the official Ruptela configuration method or software such as the mDMP mobile app or vendor configuration tools.
- A Plaspy account and device registration procedure in place to validate incoming reports.
- Basic tools for verifying cellular registration and GNSS fixes during initial setup.
- Access to the Ruptela product documentation for firmware specific instructions and any variant-specific notes.

## How This Tracker Connects to Plaspy

Asset5 transmits location and telemetry over cellular networks to the Plaspy server endpoint so Plaspy can display real time location, events, and device health. The device is configured to report to the shared Plaspy server endpoint and port, where Plaspy identifies the device protocol and parses incoming messages.

- GNSS fixes and Cell‑ID fallback data are sent to Plaspy for position updates.
- Motion events from the accelerometer trigger increased reporting frequency to aid recovery workflows.
- Battery and device health telemetry is reported so Plaspy can surface maintenance alerts.
- Bluetooth LE supports local configuration and on‑site verification prior to activating network reporting.
- All communication to Plaspy targets the shared server endpoint and the same Plaspy port so device reports are grouped consistently.

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software (for example the mDMP app or vendor configuration tool) for your Asset5 firmware and hardware variant.
2. In the device server or network settings enter d.plaspy.com or, where required, the server IP 54.85.159.138.
3. Set the server port to 8888 as the destination port used by Plaspy for all devices.
4. If the device requires a transport selection, choose UDP or TCP depending on your installation preference.
5. Apply or save the configuration within the Ruptela tool or app and ensure the changes are committed to the device.
6. Restart the device if the configuration tool or firmware requires a reboot to activate new network settings.
7. Validate that Asset5 reports to Plaspy by observing incoming data in your Plaspy account or by checking server-side logs for device messages.

## Example Configuration Commands

The Asset5 can be configured via Ruptela tools and the mDMP mobile app rather than generic text commands in many deployments. Exact commands and syntax vary by firmware and configuration channel; consult the official Ruptela configuration documentation for command-line or SMS command sets specific to your firmware.

Below are the key fields you will typically set in the manufacturer tool rather than literal commands:

- Server host: d.plaspy.com (or 54.85.159.138)
- Server port: 8888
- Transport: UDP or TCP

If your deployment uses Ruptela SMS or text command configuration, refer to the official Ruptela docs for the exact command format and preserve placeholders such as {{apn}}, {{apnu}}, or {{apnp}} when configuring APN credentials through commands. Always follow Ruptela’s command ordering when performing an initial setup or optional reset.

## Configuration Notes

- Firmware differences can change exact menu locations or command formats; always check the Ruptela release notes for your device firmware.
- Choosing UDP or TCP can affect delivery behavior; UDP is common for lightweight telemetry while TCP may be used where reliable session delivery is preferred.
- Because Plaspy uses the same port for all devices and auto-detects the protocol, focus on entering the correct host/IP and port first, then verify transport if the tracker requires it.
- Use BLE configuration (mDMP app) for local setup and quick verification before committing devices to the field.
- Reporting intervals and motion sensitivity affect battery life; adjust settings according to operational requirements and verify impacts in Plaspy.

## Why Use Plaspy with This Configuration

Using Asset5 with Plaspy provides a practical solution for organizations that need low-maintenance, reliable tracking of unpowered or high-value assets. Asset5’s long battery life, multi-constellation GNSS, and motion-aware reporting pair well with Plaspy’s centralized dashboards and alerting to provide continuous situational awareness and operational oversight.

To learn more about Plaspy and how it can manage Asset5 devices at scale visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer details verify information on the official Ruptela website https://ruptela.com/ as procedures and firmware features can change over time.
