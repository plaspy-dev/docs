---
slug: /reachfar/rf_v22/configuration
id: rf_v22-configuration
sidebar_label: Configuration
title: Reachfar - RF-V22 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup and server configuration guidance for integrating the Reachfar RF V22 door alarm with Plaspy
keywords:
  - Reachfar RF V22 configuration
  - RF V22 setup
  - Reachfar door alarm configuration
  - Plaspy device setup
  - cellular door monitor configuration
  - GSM GPRS door alarm setup
  - RF V22 Plaspy integration
  - door telemetry configuration guide
  - Reachfar configuration guide
  - Plaspy platform integration
---

# Reachfar - RF-V22 Configuration

This page covers the public configuration context for using the Reachfar RF‑V22 Telecom Smart Door Alarm with Plaspy. It explains the shared server settings Plaspy expects and outlines the practical steps and checks most installers use to point an RF‑V22 at Plaspy for door open and close event reporting. The content focuses on public, manufacturer‑agnostic setup information and the Plaspy endpoint required for integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The RF‑V22 communicates door state over GSM/GPRS, and this guide explains how to configure the device to report those events to the Plaspy server endpoint so the telemetry becomes visible in Plaspy dashboards and alerting rules.

## Configuration Overview

The goal of configuration is to prepare the RF‑V22 to reliably send door open and close events to Plaspy so those events are usable for alerting, logging, and operational workflows. This involves configuring the device with Plaspy server details, ensuring cellular connectivity, and validating that events are received by the platform.

- Point the RF‑V22 to the Plaspy server endpoint so door event telemetry is routed to the platform.
- Ensure the device has an active cellular connection and adequate signal to deliver reports over GSM/GPRS.
- Choose the appropriate transport (UDP or TCP) if the device requires selection and set the Plaspy port.
- Save and apply settings on the device and restart if the manufacturer recommends it.
- Validate delivery by causing test open and close events and confirming they appear in Plaspy.
- Use the product manual or installation video from Reachfar for any device specific steps.

## Plaspy Server Settings

- Server domain d.plaspy.com for device endpoint configuration
- Server IP 54.85.159.138 as an alternative endpoint for device configurations that require an IP
- Port 8888 as the Plaspy listening port for all devices
- Transport support for UDP or TCP; configure the RF‑V22 for UDP or TCP if the device requires a transport selection
- Automatic protocol detection in Plaspy so the platform recognizes the tracker protocol after the device reports

Note that Plaspy uses the same port for all supported devices and will automatically attempt to detect the protocol used by the tracker.

## Typical Requirements Before Setup

- A powered RF‑V22 unit with the installer manual and, if available, the installation video on hand
- A cellular SIM card and an active data plan compatible with quad band GSM GPRS if required by the unit
- Basic access to the device configuration method supplied by Reachfar such as the vendor configuration tool or local configuration interface
- Reasonable cellular signal at the installation location or a plan to test signal strength before final mounting
- Access to your Plaspy account or the person managing the Plaspy tenant to confirm device visibility after configuration
- Time to perform a validation test by opening and closing the door to confirm event reporting

## How This Tracker Connects to Plaspy

The RF‑V22 reports door open and close events over GSM/GPRS to the configured monitoring endpoint. When configured with the Plaspy settings, those events are received by Plaspy and appear as telemetry inputs that can trigger notifications, be recorded in logs, and participate in automation rules.

- The RF‑V22 is configured to send event messages to d.plaspy.com or to 54.85.159.138 on port 8888
- The device uses UDP or TCP transport depending on the configuration chosen during setup
- Plaspy automatically detects the incoming device protocol and maps door events into the platform
- Events such as door open, door close, and alarm states are forwarded to Plaspy for immediate alerting and history
- Once reporting is validated, the RF‑V22 contributes to combined workflows in Plaspy alongside other telemetry sources

## Common Configuration Workflow

1. Access the official Reachfar configuration method or software as described in the RF‑V22 product manual or installer documentation.
2. Enter the Plaspy server domain d.plaspy.com or use the server IP 54.85.159.138 in the server or endpoint field.
3. Set the server port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP transport if the RF‑V22 requires a transport selection and save that choice.
5. Apply or save the device configuration using the manufacturer tool or interface.
6. Restart the device if the manufacturer recommends a reboot after configuration.
7. Validate by generating door open and close events and confirm the events appear in Plaspy.

Follow the Reachfar manual and installation video for device specific interface steps during this workflow.

## Example Configuration Commands

The RF‑V22 configuration method and the exact commands or interface screens vary by firmware and the Reachfar configuration tools. Manufacturer documentation typically describes whether configuration is done via a web tool, a dedicated configuration utility, or an SMS/CLI method. Because commands differ across firmware and toolsets, consult the RF‑V22 product manual for exact syntax and step by step command examples.

If your version of the RF‑V22 supports textual commands or SMS setup, use the official instructions from Reachfar to construct server and port entries. Preserve placeholders such as [apn], [apnu], or [apnp] exactly as provided by the manufacturer when those placeholders appear in official guidance.

## Configuration Notes

- Firmware and hardware revisions can change configuration menus and supported transports; always confirm the exact steps for your RF‑V22 revision.
- The choice between UDP and TCP may affect reliability and message ordering; use the transport recommended by Reachfar for your deployment context.
- Installer best practice is to test cellular connectivity and event delivery before final mounting to avoid repeat site visits.
- Market variations and regional SIM requirements can affect APN or data plan needs; follow operator and manufacturer guidance.
- Keep the Reachfar product manual and installation video available during the configuration process for reference.

## Why Use Plaspy with This Configuration

Using the RF‑V22 with Plaspy provides centralized visibility of door open and close events alongside other telemetry managed by Plaspy. This is useful for facilities and organizations that need rapid alerting, historical auditing, and the ability to correlate door events with other operational data.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify information on the official Reachfar website https://www.reachfargps.com/ since setup steps and device behavior can change over time.
