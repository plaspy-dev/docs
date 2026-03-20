---
slug: /gosafe/g737/configuration
id: g737-configuration
sidebar_label: Configuration
title: Gosafe - G737 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the Gosafe G737 ankle bracelet for use with Plaspy including required server settings and workflow
keywords:
  - Gosafe G737 configuration
  - Gosafe G737 setup
  - Gosafe G737 server configuration
  - Gosafe G737 Plaspy
  - Gosafe tracker configuration
  - G737 GPS setup
  - G737 Plaspy integration
  - ankle bracelet GPS configuration
  - electronic monitoring tracker setup
  - GPS tracker server settings
---

# Gosafe - G737 Configuration

This page covers the public configuration context for using the Gosafe G737 ankle bracelet with the Plaspy platform. It explains the shared Plaspy server settings you will enter on the device or in the manufacturer configuration tool, describes what to verify before integration, and provides a practical workflow to bring a G737 online with Plaspy for real time tracking and event reporting.

Plaspy uses a shared server endpoint and port for all supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools that Gosafe provides, so use this guide as a practical reference and confirm device-specific steps with the official manufacturer documentation.

## Configuration Overview

The goal of configuration is to prepare the G737 to continuously and reliably send location, event, and telemetry data to Plaspy so the device appears in the platform and generates expected alerts and history. Configuration primarily consists of directing the device to Plaspy server settings, selecting the transport method if required, and validating connectivity.

- Enter Plaspy server settings so the G737 knows where to send its data.
- Select UDP or TCP transport on the device if the manufacturer requires a transport choice.
- Set and save the shared port used by Plaspy so the device and platform match.
- Restart or apply configuration so the device begins a fresh connection attempt to Plaspy.
- Validate the device is reporting location and events in Plaspy after configuration.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the G737:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port for all supported devices

Enter either the domain d.plaspy.com or the IP 54.85.159.138 during configuration; both resolve to the same Plaspy endpoint and the platform listens on port 8888.

## Typical Requirements Before Setup

- Device must be powered on and have sufficient battery charge for configuration and initial reporting.
- Active cellular service configured on the device via Micro SIM or embedded eSIM where applicable and appropriate network coverage for LTE CAT-1 or GSM fallback.
- Access to the official Gosafe configuration method or software such as the manufacturer web tool, USB configuration utility, or approved field programming tool.
- Knowledge of the device identifiers and any access credentials required by the Gosafe configuration interface.
- Confirmation of the Plaspy server settings d.plaspy.com or 54.85.159.138 and port 8888 before applying changes.
- If available, ensure the device firmware is reasonably current or record the firmware version for troubleshooting.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the G737 transmits location fixes, tamper and strap events, SOS signals, and telemetry over its cellular connection to the shared Plaspy endpoint and port. Plaspy receives these messages and applies automatic protocol detection to interpret the tracker data and present it in the platform.

- Location and GNSS fixes are sent via the device cellular link to d.plaspy.com or 54.85.159.138 on port 8888.
- Tamper, strap cut, SOS, and zone events are reported as alerts to Plaspy so supervisors can take action.
- BLE home beacon events can be reported as part of device telemetry if configured to do so and supported by the vendor settings.
- Plaspy’s automatic protocol detection identifies the G737 protocol so no manual protocol selection is required on the platform side.
- Using the same port 8888 for all devices simplifies server configuration and device provisioning.

## Common Configuration Workflow

1. Access the official Gosafe configuration method or software for the G737 (manufacturer web tool, USB utility, or field programming tool).
2. In the device server settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888, noting that Plaspy uses the same port for all devices.
4. If the device requires a transport selection, choose UDP or TCP according to installer preference or vendor guidance.
5. Save or apply the configuration changes in the vendor tool.
6. Restart the G737 if the manufacturer instructions require a reboot for settings to take effect.
7. Validate that the device appears and reports location and events in Plaspy after it reconnects.

## Example Configuration Commands

The exact configuration commands or UI fields vary by Gosafe firmware and the vendor configuration tool. Some installers use a graphical configuration utility, others use a USB provisioning cable or a field programming app. In all cases you will supply the Plaspy server domain or IP and the shared Plaspy port.

When using the manufacturer tool, look for fields labeled Server, Host, or Reporting Server and enter d.plaspy.com or 54.85.159.138, and locate the Port field to enter 8888. If the tool requires selecting a transport, choose UDP or TCP. After saving, follow the tool guidance to restart or reinitialize the device so it begins reporting to Plaspy.

## Configuration Notes

- Firmware and hardware revisions can change configuration field names or required steps; always confirm the vendor UI labels before applying settings.
- Choose UDP or TCP based on installer preference and any vendor recommendations; Plaspy accepts both transports on port 8888 and handles protocol detection automatically.
- Entering the domain d.plaspy.com is preferred for normal operation; the IP 54.85.159.138 can be used as a fallback if DNS is unavailable.
- Preserve any manufacturer placeholders or fields required for cellular configuration such as APN entries if your deployment requires them.
- After configuration, monitor the device for event and location reporting to ensure tamper and SOS alerts are transmitted as expected.

## Why Use Plaspy with This Configuration

Using the Gosafe G737 with Plaspy gives agencies and supervisors a practical way to centralize location, tamper, and event telemetry in a single platform. The G737’s ankle form factor, tamper-evident strap, BLE home beacon support, and LTE CAT-1 connectivity provide the raw telemetry and event signals that Plaspy consumes to deliver real time maps, alerts, and compliance reports.

To learn more about Plaspy visit https://www.plaspy.com. Please verify the latest device specific configuration instructions, firmware behavior, and manufacturer recommendations on the Gosafe website https://gosafesystem.com/ as vendor setup methods and firmware can change over time.
