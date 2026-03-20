---
slug: /autofon/e_mayak_31/configuration
id: e_mayak_31-configuration
sidebar_label: Configuration
title: AutoFon - E-Mayak 3.1 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the AutoFon E-Mayak 3.1 for use with Plaspy including server settings setup workflow and SMS integration guidance
keywords:
  - AutoFon E-Mayak 3.1 configuration
  - AutoFon E-Mayak 3.1 setup
  - AutoFon E-Mayak 3.1 server configuration
  - AutoFon E-Mayak 3.1 Plaspy
  - AutoFon GPS tracker configuration
  - E-Mayak 3.1 SMS integration
  - AutoFon tracker setup guide
  - Plaspy tracker configuration
  - vehicle tracking E-Mayak 3.1
  - asset tracking AutoFon
---

# AutoFon - E-Mayak 3.1 Configuration

This page provides the public configuration context for using the AutoFon E-Mayak 3.1 with Plaspy. It summarizes how the E-Mayak 3.1 communicates, what is required to integrate it with Plaspy workflows, and which Plaspy server settings to use when routing device data into the platform. The guidance here focuses on practical, public information rather than private manufacturer procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. The E-Mayak 3.1 is an SMS-first device, so manufacturer-side setup can vary by firmware version, hardware revision, installation type, and the vendor configuration tools used. Use the steps below to plan integration and confirm details with official AutoFon documentation where needed.

## Configuration Overview

The configuration process prepares the E-Mayak 3.1 to deliver position and telemetry to Plaspy either by direct network transport where available or by forwarding SMS messages into Plaspy input channels. The goal is to ensure the device is reachable, messages are parsed correctly, and positions appear in the Plaspy platform.

- Point device output or an SMS gateway to the Plaspy server endpoint when using IP transport or to Plaspy input channels when using SMS forwarding.
- Configure the device transport where applicable and set the shared Plaspy port so Plaspy can receive data consistently.
- Validate device identity and message format so Plaspy can automatically detect the tracker protocol and decode messages correctly.
- Test with live position and telemetry messages to confirm mapping, battery and heartbeat reporting, and any alert messages.
- Document the chosen integration method for maintenance, especially because E-Mayak 3.1 often relies on SMS forwarding rather than continuous GPRS.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note: Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, which simplifies server-side handling for mixed fleets.

## Typical Requirements Before Setup

- A powered and functional E-Mayak 3.1 with a valid SIM capable of sending SMS messages.
- Access to the official AutoFon configuration method for the E-Mayak 3.1 such as SMS command set or manufacturer tools.
- A Plaspy account or designated Plaspy input endpoint where forwarded messages or API posts will be received.
- A plan for how SMS messages will reach Plaspy: direct SMS forwarding to an SMS gateway that posts to Plaspy, manual parsing, or an integration service.
- A test SIM or low-cost SMS plan for verification messages and battery/heartbeat testing.
- Knowledge of the device PIN and owner number settings so administrative commands can be applied.

## How This Tracker Connects to Plaspy

The E-Mayak 3.1 is optimized for SMS control and reporting. In practice, you connect it to Plaspy by ensuring its outgoing messages are delivered to Plaspy or to a service that forwards them to Plaspy. If a network transport option is available in a variant or future firmware, Plaspy’s shared server and port can be used directly.

- Primary connection method is SMS messages containing coordinates, map links, and telemetry which are forwarded into Plaspy.
- Use an SMS to HTTP or SMS to API gateway to post SMS content to Plaspy endpoints, or paste map links where supported by Plaspy.
- For trackers or gateways that support IP transport, configure the device or gateway to send to d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP.
- Plaspy will automatically detect the protocol used and decode standard tracker messages for visualization and logging.
- Validate heartbeat SMS and telemetry messages so Plaspy shows device health and battery status in dashboards.

## Common Configuration Workflow

1. Access the official AutoFon E-Mayak 3.1 configuration method or software as documented by the manufacturer.
2. Where IP transport is available or if using a gateway, enter d.plaspy.com or 54.85.159.138 as the destination host.
3. Set port 8888 as the destination port used by Plaspy for all supported devices.
4. If the device or gateway requires transport selection, choose UDP or TCP according to the device instructions.
5. Apply or save the configuration in the device or gateway and ensure settings persist after power cycles.
6. Restart the device if required by the manufacturer to activate new network or SMS delivery settings.
7. Validate that the device reports to Plaspy by sending a test position or heartbeat and confirming receipt in the Plaspy platform.

## Example Configuration Commands

This device is configured primarily via SMS commands or vendor tools and the exact command set can vary by firmware and regional firmware builds. Because manufacturer commands and syntax change over time, consult the official AutoFon E-Mayak 3.1 documentation for the exact SMS strings and administrative commands required to set owner numbers, PINs, and message formats.

If you are integrating via an SMS to API gateway, configure the gateway to forward SMS messages into Plaspy and map the incoming SMS fields to the format Plaspy expects. If your gateway or a variant of the tracker supports direct IP transport, use the Plaspy server settings above.

## Configuration Notes

- E-Mayak 3.1 is SMS-first. Do not assume GPRS or continuous IP telemetry unless a specific hardware revision or firmware release explicitly adds that capability.
- Where both UDP and TCP are available, test both transports as network conditions and gateway behavior can affect delivery and latency.
- Battery life and deep-sleep behavior affect how and when the tracker will respond to queries and send heartbeat messages; plan test intervals accordingly.
- Keep manufacturer PINs and owner number settings documented and secure; incorrect PIN attempts can lock administrative access.
- Use a controlled test environment and a test SIM to confirm SMS parsing into Plaspy before deploying at scale.

## Why Use Plaspy with This Configuration

Using Plaspy with the AutoFon E-Mayak 3.1 gives teams a practical way to visualize on-demand positions and telemetry from a low-power, covert SMS tracker. For workflows that prioritize long battery life, minimal detectability, and periodic location checks, forwarding SMS messages into Plaspy provides mapping, alerting, and basic operational visibility without continuous data subscriptions.

Learn more about Plaspy on the main website https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions and SMS command reference with AutoFon at https://www.autofon.ru/.
