// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Cost quote returned by POST /cost. current_summary and updated_summary hold the
 * org billing summary now and with this resource; omitted when the caller cannot
 * view billing.
 */
export interface CostQuote {
  /**
   * Currency the quote is denominated in. Always "USD" in v1.
   */
  currency: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  monthly_total: string;

  /**
   * Timestamp the quote was priced at.
   */
  priced_at: string;

  /**
   * Priced rows, one per usage dimension emitted by the resource.
   */
  usage_dimensions: Array<CostQuote.UsageDimension>;

  /**
   * Forward-looking billing summary for an organization. All costs are run-rate
   * projections from the organization's current active usage ("≈ $X/mo at current
   * usage").
   */
  current_summary?: OrganizationBillingSummary;

  /**
   * Forward-looking billing summary for an organization. All costs are run-rate
   * projections from the organization's current active usage ("≈ $X/mo at current
   * usage").
   */
  updated_summary?: OrganizationBillingSummary;
}

export namespace CostQuote {
  /**
   * Priced row for a single usage dimension emitted by a resource.
   */
  export interface UsageDimension {
    /**
     * Usage dimension being priced (e.g. compute_vcpu, storage_abs_gb).
     */
    dimension: string;

    /**
     * User-facing label for the dimension (e.g. "vCPU (hours)").
     */
    dimension_display_name: string;

    /**
     * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
     */
    monthly_amount: string;

    /**
     * Quantity of the dimension being priced.
     */
    quantity: number;

    /**
     * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
     */
    unit_price: string;
  }
}

/**
 * Cost quote returned by PATCH /:id/cost: current-state quote, post-update quote,
 * and signed diff. current_summary and updated_summary omitted when the caller
 * cannot view billing.
 */
export interface CostQuoteUpdate {
  /**
   * Quote for the proposed (post-update) resource state.
   */
  after: CostQuoteUpdate.After;

  /**
   * Quote for the proposed (post-update) resource state.
   */
  before: CostQuoteUpdate.Before;

  /**
   * Currency the quote is denominated in. Always "USD" in v1.
   */
  currency: string;

  /**
   * Per-dimension and total deltas: after minus before.
   */
  diff: CostQuoteUpdate.Diff;

  /**
   * Timestamp the quote was priced at.
   */
  priced_at: string;

  /**
   * Forward-looking billing summary for an organization. All costs are run-rate
   * projections from the organization's current active usage ("≈ $X/mo at current
   * usage").
   */
  current_summary?: OrganizationBillingSummary;

  /**
   * Forward-looking billing summary for an organization. All costs are run-rate
   * projections from the organization's current active usage ("≈ $X/mo at current
   * usage").
   */
  updated_summary?: OrganizationBillingSummary;
}

export namespace CostQuoteUpdate {
  /**
   * Quote for the proposed (post-update) resource state.
   */
  export interface After {
    /**
     * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
     */
    monthly_total: string;

    /**
     * Priced rows, one per usage dimension emitted by the resource.
     */
    usage_dimensions: Array<After.UsageDimension>;
  }

  export namespace After {
    /**
     * Priced row for a single usage dimension emitted by a resource.
     */
    export interface UsageDimension {
      /**
       * Usage dimension being priced (e.g. compute_vcpu, storage_abs_gb).
       */
      dimension: string;

      /**
       * User-facing label for the dimension (e.g. "vCPU (hours)").
       */
      dimension_display_name: string;

      /**
       * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
       */
      monthly_amount: string;

      /**
       * Quantity of the dimension being priced.
       */
      quantity: number;

      /**
       * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
       */
      unit_price: string;
    }
  }

  /**
   * Quote for the proposed (post-update) resource state.
   */
  export interface Before {
    /**
     * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
     */
    monthly_total: string;

    /**
     * Priced rows, one per usage dimension emitted by the resource.
     */
    usage_dimensions: Array<Before.UsageDimension>;
  }

  export namespace Before {
    /**
     * Priced row for a single usage dimension emitted by a resource.
     */
    export interface UsageDimension {
      /**
       * Usage dimension being priced (e.g. compute_vcpu, storage_abs_gb).
       */
      dimension: string;

      /**
       * User-facing label for the dimension (e.g. "vCPU (hours)").
       */
      dimension_display_name: string;

      /**
       * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
       */
      monthly_amount: string;

      /**
       * Quantity of the dimension being priced.
       */
      quantity: number;

      /**
       * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
       */
      unit_price: string;
    }
  }

  /**
   * Per-dimension and total deltas: after minus before.
   */
  export interface Diff {
    /**
     * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
     */
    monthly_total_delta: string;

    /**
     * Per-dimension diff entries. Includes every dimension touched by the update.
     */
    usage_dimensions: Array<Diff.UsageDimension>;
  }

  export namespace Diff {
    /**
     * Per-dimension diff entry. Both before and after are always present.
     */
    export interface UsageDimension {
      /**
       * Priced row after the update. Always present.
       */
      after: UsageDimension.After;

      /**
       * Priced row after the update. Always present.
       */
      before: UsageDimension.Before;

      /**
       * Usage dimension being priced (e.g. compute_vcpu, storage_abs_gb).
       */
      dimension: string;

      /**
       * User-facing label for the dimension (e.g. "vCPU (hours)").
       */
      dimension_display_name: string;

      /**
       * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
       */
      monthly_amount_delta: string;
    }

    export namespace UsageDimension {
      /**
       * Priced row after the update. Always present.
       */
      export interface After {
        /**
         * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
         */
        monthly_amount: string;

        quantity: number;

        /**
         * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
         */
        unit_price: string;
      }

      /**
       * Priced row after the update. Always present.
       */
      export interface Before {
        /**
         * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
         */
        monthly_amount: string;

        quantity: number;

        /**
         * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
         */
        unit_price: string;
      }
    }
  }
}

/**
 * Forward-looking billing summary for an organization. All costs are run-rate
 * projections from the organization's current active usage ("≈ $X/mo at current
 * usage").
 */
export interface OrganizationBillingSummary {
  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  daily_cost: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  effective_balance: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  monthly_cost: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  recharge_threshold_fraction: string;

  /**
   * Projected date the balance reaches the recharge threshold at the current
   * run-rate. Null when there is no active usage (never charges).
   */
  estimated_next_charge_at?: string | null;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  runway_months?: string | null;
}

/**
 * Pagination response details.
 */
export interface Pagination {
  next_cursor: string | null;

  previous_cursor: string | null;

  total_count: number;
}

/**
 * Region the resource is in.
 */
export type RegionName = 'us-sva-2';

/**
 * Status of the resource.
 */
export type ResourceStatus = 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error';

/**
 * IP filter rules.
 */
export interface SourceIPRule {
  /**
   * List of IPv4 CIDR addresses to allow.
   */
  allowed?: Array<string>;

  /**
   * List of IPv4 CIDR addresses to deny.
   */
  blocked?: Array<string>;
}

/**
 * IP filter rules.
 */
export interface SourceIPRuleResponse {
  /**
   * List of IPv4 CIDR addresses to allow.
   */
  allowed: Array<string>;

  /**
   * List of IPv4 CIDR addresses to deny.
   */
  blocked: Array<string>;
}
